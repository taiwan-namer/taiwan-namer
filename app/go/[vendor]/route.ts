import { NextRequest, NextResponse } from "next/server";
import { getRedirectUrl, type Vendor } from "@/lib/redirect";
import { logClick } from "@/lib/clicks";

const VENDORS: Vendor[] = ["namecheap", "bluehost"];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ vendor: string }> }
) {
  const { vendor } = await params;
  const v = vendor.toLowerCase() as Vendor;
  if (!VENDORS.includes(v)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain") ?? "";
  const tld = searchParams.get("tld") ?? "";
  const referrer = request.headers.get("referer") ?? request.headers.get("referrer") ?? "";

  logClick({ referrer, domain, vendor: v, tld: tld || undefined });

  const url = getRedirectUrl(v, domain || undefined, tld || undefined);
  return NextResponse.redirect(url, 302);
}
