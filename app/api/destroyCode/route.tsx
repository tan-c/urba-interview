import { NextRequest, NextResponse } from "next/server";
import { referralCodes, saveReferralCodes } from "@/data/referralCodes";

// POST: 销毁推荐码
export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }
  const found = referralCodes.find((c) => c.code === code);
  if (!found) {
    return NextResponse.json({ error: "Code not found" }, { status: 404 });
  }
  found.active = false;
  await saveReferralCodes(referralCodes);
  return NextResponse.json({ success: true });
} 