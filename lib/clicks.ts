/**
 * Click logging：timestamp, referrer, domain, vendor
 * 使用 in-memory 儲存（部署可改為 SQLite / Serverless KV）
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
