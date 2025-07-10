import { NextRequest, NextResponse } from "next/server";
import { referralCodes, saveReferralCodes } from "@/data/referralCodes";

// 生成6位推荐码
function generateCode() {
    let code = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
  
// POST: 生成推荐码
export async function POST(req: NextRequest) {
    const code = generateCode();
    const now = new Date();
    const expireAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 1个月
    const newCode = {
      code,
      createdAt: now.toISOString(),
      expireAt: expireAt.toISOString(),
      active: true,
      usedBy: [] as number[],
    };
    referralCodes.push(newCode);
    await saveReferralCodes(referralCodes);
    return NextResponse.json({ code });
  }