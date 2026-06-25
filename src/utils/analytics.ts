/**
 * Analytics tracking utility.
 * Sends events to Microsoft Clarity and Google Analytics 4 (when available).
 */

// Global type augmentation for Clarity and gtag
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export type AnalyticsEventName =
  | 'cta_contact_click'
  | 'cta_projects_click'
  | 'cta_download_cv_click'
  | 'cta_whatsapp_click'
  | 'cta_email_click'
  | 'cta_linkedin_click'
  | 'cta_github_click'
  | 'cta_schedule_call_click'
  | 'project_card_click'
  | 'project_github_click'
  | 'project_demo_click'
  | 'project_contact_click'
  | 'project_whatsapp_click'
  | 'project_gallery_click'
  | 'project_case_study_click'
  | 'social_proof_card_click'
  | 'header_hire_click'
  | 'header_nav_click'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  | 'language_toggle_click'
  | 'footer_link_click';

export interface AnalyticsEventProps {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(eventName: AnalyticsEventName, props?: AnalyticsEventProps) {
  const safeProps = props ?? {};

  // Microsoft Clarity custom event
  if (typeof window !== 'undefined' && window.clarity) {
    try {
      window.clarity('event', eventName, safeProps);
    } catch {
      // Fail silently to avoid breaking UI
    }
  }

  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, safeProps);
    } catch {
      // Fail silently
    }
  }

}

/**
 * Higher-order helper for anchor/button click handlers.
 * Tracks the event and then executes the original callback.
 */
export function withTracking(
  eventName: AnalyticsEventName,
  props?: AnalyticsEventProps,
  callback?: (e: React.MouseEvent) => void
) {
  return (e: React.MouseEvent) => {
    trackEvent(eventName, props);
    callback?.(e);
  };
}
