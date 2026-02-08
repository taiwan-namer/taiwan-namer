/**
 * 站內跳轉：/go/godaddy, /go/namecheap, /go/bluehost
 * 依 vendor + domain/tld 產生最終聯盟或官網連結（與 page 邏輯一致）
 */
const GODADDY_BASE = "https://www.godaddy.com/domainsearch/find";
const NAMECHEAP_AFFILIATE_BASE = "https://www.tkqlhce.com/click-101646408-15083037";
const NAMECHEAP_SEARCH_BASE = "https://www.namecheap.com/domains/registration/results/";
const BLUEHOST_AFFILIATE = "https://bluehost.sjv.io/c/6954000/1376228/11352";

const CJ_PID = process.env.CJ_PID ?? "";
const CJ_GODADDY_AID = process.env.CJ_GODADDY_AID ?? "";

export type Vendor = "godaddy" | "namecheap" | "bluehost";

/**
 * 產生對應廠商的最終跳轉 URL（帶 domain 時為查價連結，否則為首頁/搜尋頁）
 */
export function getRedirectUrl(
  vendor: Vendor,
  domain?: string | null,
  tld?: string | null
): string {
  const d = (domain ?? "").trim();
  const useDomain = d || (tld ? `example.${tld.replace(/^\./, "")}` : "");

  switch (vendor) {
    case "godaddy": {
      const target = useDomain
        ? `${GODADDY_BASE}?checkAvail=1&domainToCheck=${encodeURIComponent(useDomain)}`
        : GODADDY_BASE;
      if (CJ_PID && CJ_GODADDY_AID) {
        return `https://www.jdoqocy.com/click-${CJ_PID}-${CJ_GODADDY_AID}?url=${encodeURIComponent(target)}`;
      }
      return target;
    }
    case "namecheap": {
      const target = useDomain
        ? `${NAMECHEAP_SEARCH_BASE}?domain=${encodeURIComponent(useDomain)}`
        : NAMECHEAP_SEARCH_BASE;
      return `${NAMECHEAP_AFFILIATE_BASE}?url=${encodeURIComponent(target)}`;
    }
    case "bluehost":
      return BLUEHOST_AFFILIATE;
    default:
      return "/";
  }
}

/**
 * 站內連結用：組出 /go/[vendor]?domain=xxx&tld=xxx
 */
export function getGoLink(vendor: Vendor, domain?: string | null, tld?: string | null): string {
  const params = new URLSearchParams();
  if (domain) params.set("domain", domain);
  if (tld) params.set("tld", tld);
  const q = params.toString();
  return `/go/${vendor}${q ? `?${q}` : ""}`;
}
