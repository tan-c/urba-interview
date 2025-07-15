export type ReferalCode = {
  id: number;
  code: string;
  createdAt: string;
  updatedAt: string;
  status: 0 | 1;
//   0无效 1有效
};

export const referalCodes: ReferalCode[] = [
  {
    id: 1,
    code: "A1B2C3", 
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    status: 1,
  }
]