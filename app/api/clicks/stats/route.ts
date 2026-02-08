import { NextResponse } from "next/server";
import { getStats } from "@/lib/clicks";

export function GET() {
  const stats = getStats();
  return NextResponse.json(stats);
}
