/**
 * 事件追蹤：generate, outbound_vendor, copy, favorite
 * 支援 GA (gtag) 或自建 endpoint
 */

export type TrackEventName = "generate" | "outbound_vendor" | "copy" | "favorite";

export type TrackParams = {
  generate?: { keyword?: string };
  outbound_vendor?: { vendor: string; domain?: string };
  copy?: { domain: string };
  favorite?: { domain: string; action: "add" | "remove" };
};

export function trackEvent(event: TrackEventName, params?: TrackParams[typeof event]): void {
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
