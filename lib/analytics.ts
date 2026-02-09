/**
 * 事件追蹤：generate, outbound_vendor, copy, favorite
 * 支援 GA (gtag) 或自建 endpoint
 */

export type TrackEventName =
  | "generate"
  | "outbound_vendor"
  | "copy"
  | "favorite"
  | "value_anchor_view"
  | "value_anchor_examples_click";

export type TrackParams = {
  generate?: { keyword?: string };
  outbound_vendor?: { vendor: string; domain?: string; source?: string };
  copy?: { domain: string };
  favorite?: { domain: string; action: "add" | "remove" };
  value_anchor_view?: Record<string, never>;
  value_anchor_examples_click?: Record<string, never>;
};

export function trackEvent(event: "generate", params?: { keyword?: string }): void;
export function trackEvent(event: "outbound_vendor", params?: { vendor: string; domain?: string; source?: string }): void;
export function trackEvent(event: "copy", params?: { domain: string }): void;
export function trackEvent(event: "favorite", params?: { domain: string; action: "add" | "remove" }): void;
export function trackEvent(event: "value_anchor_view", params?: Record<string, never>): void;
export function trackEvent(event: "value_anchor_examples_click", params?: Record<string, never>): void;
export function trackEvent(event: TrackEventName, params?: unknown): void {
  if (typeof window === "undefined") return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag("event", event, params);
    return;
  }

  // 自建：可改為 POST /api/events
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", event, params);
  }
}
