"use client";

import { users } from "@/data/users";
import { useState, useEffect } from "react";

export default function Agent() {
  const [userList, setUserList] = useState(users)
  const [descode, setDescode] = useState('')
  const createCode = async () => {
    try {
      const res = await fetch("/api/setNewCode", { method: "POST" });
      const data = await res.json();
      if (data.code) {
        alert("新推荐码: " + data.code);
      } else {
        alert("生成失败");
      }
    } catch (err) {
      alert("网络错误");
    }
  }

  const destroyCode = async () => {
    if (!descode) {
      alert("请输入要销毁的推荐码");
      return;
    }
    try {
      const res = await fetch("/api/destroyCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: descode }),
      });
      const data = await res.json();
      if (data.success) {
        alert("销毁成功");
      } else {
        alert(data.error || "销毁失败");
      }
    } catch (err) {
      alert("网络错误");
    }
  }

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const res = await fetch(`/api/usercodeList`);
        const data = await res.json();
        console.log('data',data)
        if (data) {
          setUserList(data.users)
        } else {
          alert(data.error || "查询失败");
        }
      } catch (err) {
        alert("网络错误");
      }
    };
    fetchUserList();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">Agent Page</h1>

      <hr />

      <div>
        <h2>Code Usage</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={createCode}>新建推荐码</button>
      </div>
      <div>
      <input type="text" value={descode} onChange={(e) => setDescode(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={destroyCode}>销毁推荐码</button>
      </div>

      <hr />

      <div>
        <h2>User List</h2>
        <ul>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>code</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>{user.usedCodes?.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  )
}   