import { NextRequest, NextResponse } from "next/server";
import { referralCodes, saveReferralCodes } from "@/data/referralCodes";

export async function POST(req: NextRequest) {
  const { userId, code } = await req.json();
  if (!userId || !code) {
    return NextResponse.json({ error: "Missing userId or code" }, { status: 400 });
  }
  const found = referralCodes.find((c) => c.code === code);
  if (!found) {
    return NextResponse.json({ error: "Code not found" }, { status: 404 });
  }
  if (!found.active) {
    return NextResponse.json({ error: "Code is not active" }, { status: 400 });
  }
  if (found.usedBy.includes(userId)) {
    return NextResponse.json({ error: "User already used this code" }, { status: 400 });
  }
  found.usedBy.push(userId);
  await saveReferralCodes(referralCodes);
  return NextResponse.json({ success: true });
} 