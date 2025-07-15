"use client";

import { useState } from "react";
import { getUsers, updateUser } from "@/actions/user";
import { getCodes } from "@/actions/referalCode";
import { useRouter } from "next/navigation";
import { User as UserType } from "@/data/users";
export default function User() {
  const router = useRouter();
  const [userList, setUserList] = useState<UserType[]>(getUsers());
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState(userList[0].id);

  const handleReferralCode = () => {
    if (input === "") {
      alert("Please enter a referral code");
      return;
    } else {
      const user = userList.find((user: UserType) => user.id === Number(userId));
      console.log(userList);
      if (user) {
        try {
          console.log(input);
          updateUser(user.id, { referralCodeInput: input });
          setUserList(getUsers());
          alert("Success");
        } catch (e: any) {
          console.log(e);
          alert(e.message);
        }
        setUserId(userList[0].id);
        setInput('');
      }else{
        alert("User is not found");
      }
    }
    
  }
  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">User Page</h1>
      <div>
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md" 
        onClick={() => router.push("/agent")}>Go to AgentPage</button>
      </div>
      <hr />

      User Id is
      <select onChange={(e) => setUserId(e.target.value)}>
        {userList.map((user: UserType) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      {/* <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" /> */}

      Referral Code is
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleReferralCode}>Use Code</button>
    </div>
  )
}   