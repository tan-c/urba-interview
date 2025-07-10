export type User = {
  id: number;
  name: string;
  email: string;
  status: string;
  type: "user" | "agent";
  usedCodes?: string
};

export const users: User[] = [
  {
    id: 1,
    name: "田中 太郎",
    email: "tanaka.taro@example.com",
    status: "free",
    type: "user",
  },
  {
    id: 2,
    name: "佐藤 花子",
    email: "sato.hanako@example.com",
    status: "free",
    type: "agent",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    email: "suzuki.ichiro@example.com",
    status: "free",
    type: "user",
  },
  {
    id: 4,
    name: "高橋 美咲",
    email: "takahashi.misaki@example.com",
    status: "free",
    type: "agent",
  },
]