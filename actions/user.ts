import { User, users } from "@/data/users";

export async function getUser(id: number) {
  return users.find((user) => user.id === id);
}

export async function getUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}

export async function createUser(user: User) {
  users.push(user);
} 