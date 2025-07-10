import { NextRequest, NextResponse } from "next/server";
import { referralCodes, saveReferralCodes } from "@/data/referralCodes";
import { users } from "@/data/users";


// 新增：查询所有用户及其使用过的推荐码
export async function GET(req:NextRequest) {
  // 构建用户id到用户信息的映射
  const userMap = Object.fromEntries(users.map(u => [u.id.toString(), u]));
  // 构建每个用户使用过的推荐码列表
  const userCodeMap: Record<string, string[]> = {};
  for (const codeObj of referralCodes) {
    for (const uid of codeObj.usedBy) {
      const key = String(uid);
      if (!userCodeMap[key]) userCodeMap[key] = [];
      userCodeMap[key].push(codeObj.code);
    }
  }
  // 组装返回数据
  const result = users.map(u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    type: u.type,
    usedCodes: userCodeMap[String(u.id)] || []
  }));
  return NextResponse.json({ users: result });
}

