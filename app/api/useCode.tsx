import { NextRequest, NextResponse } from "next/server";
import { referralCodes, saveReferralCodes } from "@/data/referralCodes";



// GET: 查询推荐码使用状况
export default async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });
  const found = referralCodes.find((c) => c.code === code);
  if (!found) return NextResponse.json({ error: "Code not found" }, { status: 404 });
  return NextResponse.json({
    code: found.code,
    active: found.active,
    expireAt: found.expireAt,
    usedCount: found.usedBy.length,
    usedBy: found.usedBy,
  });
}
