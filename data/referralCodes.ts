// 推荐码类型定义
export type ReferralCode = {
  code: string;           // 推荐码字符串（6位大写字母或数字）
  createdAt: string;      // 创建时间（ISO 字符串）
  expireAt: string;       // 过期时间（ISO 字符串）
  active: boolean;        // 是否有效
  usedBy: number[];       // 使用过该推荐码的用户ID列表
};

// Node.js 文件系统和路径模块
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";

// 推荐码数据文件路径
const filePath = join(process.cwd(), "data", "referralCodes.json");

// 推荐码数据数组，启动时从文件加载
export let referralCodes: ReferralCode[] = [];
if (existsSync(filePath)) {
  // 如果文件存在，读取并解析为数组
  referralCodes = JSON.parse(readFileSync(filePath, "utf-8"));
}

// 保存推荐码数据到文件
export function saveReferralCodes(data: ReferralCode[]) {
  writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
} 