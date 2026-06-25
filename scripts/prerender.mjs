import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const PORT = 4567;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? 'index.html' : req.url.split('?')[0];
  const filePath = path.join(DIST, urlPath);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for SPA routes
      fs.readFile(path.join(DIST, 'index.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

function findSystemChrome() {
  const candidates = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/bin/google-chrome',
    '/bin/google-chrome-stable',
    '/bin/chromium',
    '/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return undefined;
}

async function prerender() {
  const puppeteer = (await import('puppeteer')).default;
  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };

  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || findSystemChrome();
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  // Wait for the page to fully render
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle2' });
  await page.waitForFunction(() => {
    const root = document.getElementById('root');
    return root && root.children.length > 0;
  }, { timeout: 10000 });

  // Give extra time for animations to settle
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const html = await page.content();
  fs.writeFileSync(path.join(DIST, 'index.html'), html);

  await browser.close();
  server.close();
  console.log('✅ Prerendered dist/index.html');
}

server.listen(PORT, () => {
  console.log(`Serving dist on port ${PORT}`);
  prerender().catch((err) => {
    console.error('Prerender failed:', err);
    server.close();
    process.exit(1);
  });
});
