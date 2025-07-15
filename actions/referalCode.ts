import { referalCodes, ReferalCode } from "@/data/referalCode";
const codeList = [...referalCodes];
// 新增
export function createCode() {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const newCode: ReferalCode = {
    id: codeList.length + 1,
    code,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 1,
  };
  codeList.push(newCode);
  return newCode;
}

// 更新
export function updateCode(id: number, update: Partial<ReferalCode>) {
  const idx = codeList.findIndex(code => code.id === id);
  if (idx === -1) throw new Error("Code not found");
  codeList[idx] = { ...codeList[idx], ...update, updatedAt: new Date().toISOString() };
  return codeList[idx];
}

// 获取全部
export function getCodes(): ReferalCode[] {
  return [...codeList];
}

export function changeStatus(id: number, status: number): ReferalCode {
  const idx = codeList.findIndex(code => code.id === id);
  if (idx === -1) throw new Error("Code not found");
  codeList[idx].status = status as 0 | 1;
  return codeList[idx];
}
