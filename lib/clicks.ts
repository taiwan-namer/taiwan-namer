/**
 * Click logging：timestamp, referrer, domain, vendor
 * 使用 in-memory 儲存（部署可改為 SQLite / Serverless KV）
 *
 * 注意：在 Serverless（如 Vercel）環境下，每次 /go/[vendor] 與 /admin/clicks 可能由不同 instance 處理，
 * 後台看到的點擊數可能為 0 或偏低。正式環境建議改為持久化儲存（DB、Redis、Vercel KV 等）。
 */

export type ClickRecord = {
  timestamp: string; // ISO
  referrer: string;
  domain: string;
  vendor: string;
  tld?: string;
};

const STORAGE_KEY = "taiwan_namer_clicks";

declare global {
  // eslint-disable-next-line no-var
  var __clickStore: ClickRecord[] | undefined;
}

function getStore(): ClickRecord[] {
  if (typeof globalThis.__clickStore === "undefined") {
    globalThis.__clickStore = [];
  }
  return globalThis.__clickStore;
}

export function logClick(record: Omit<ClickRecord, "timestamp">): void {
  const store = getStore();
  store.push({
    ...record,
    timestamp: new Date().toISOString(),
  });
}

export function getStats(): {
  total: number;
  byVendor: Record<string, number>;
  recent: ClickRecord[];
} {
  const store = getStore();
  const byVendor: Record<string, number> = {};
  for (const r of store) {
    byVendor[r.vendor] = (byVendor[r.vendor] ?? 0) + 1;
  }
  const recent = [...store].reverse().slice(0, 100);
  return { total: store.length, byVendor, recent };
}
