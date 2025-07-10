"use client";

import { useState } from "react";

export default function User() {
  const [code, setInput] = useState("");
  const [userId, setUserId] = useState("");

  const submitCode = async () => {
    try {
      const res = await fetch("/api/saveCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, code }),
      });
      const data = await res.json();
      console.log('data',data)
      if (data.success) {
        alert("提交成功");
      } else {
        alert(data.error || "提交失败");
      }
    } catch (err) {
      alert("网络错误");
    }
  }

  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">User Page</h1>

      <hr />

      User Id is
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />

      Referral Code is
      <input type="text" value={code} onChange={(e) => setInput(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={submitCode}>Use Code</button>
    </div>
  )
}   