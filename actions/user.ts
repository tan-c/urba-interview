import { User, users } from "@/data/users";
import { getCodes } from "./referalCode";
const userList = [...users];
export async function getUser(id: number) {
  return userList.find((user) => user.id === id);
}

export async function getUserByEmail(email: string) {
  return userList.find((user) => user.email === email);
}

export async function createUser(user: User) {
  userList.push(user);
} 

export function getUsers(): User[] {
  return [...userList];
}

export function updateUser(id: number, update: Partial<User> & { referralCodeInput?: string }) {
  // 校验邀请码
  if (update.referralCodeInput) {
    const codeObj = getCodes().find(code => code.code === update.referralCodeInput);
    if (!codeObj) throw new Error("邀请码不存在");
    if (codeObj.status === 0) throw new Error("邀请码无效");
    const created = new Date(codeObj.createdAt).getTime();
    const now = Date.now();
    if (now - created > 1000 * 60 * 60 * 24 * 30) throw new Error("邀请码已过期");

    const user = userList.find(user => user.id === id);
    if (user && user.referralCode && user.referralCode.includes(update.referralCodeInput)) {
      throw new Error("该邀请码已被该用户使用过");
    }
    // 通过校验，合并邀请码
    update.referralCode = [...(user?.referralCode || []), update.referralCodeInput];
    update.status = "plus";
    update.expireDate = new Date(now + 1000 * 60 * 60 * 24 * 30).toISOString();
  }

  const idx = userList.findIndex(user => user.id === id);
  if (idx === -1) throw new Error("User not found");
  userList[idx] = { ...userList[idx], ...update };
  return userList[idx];
}