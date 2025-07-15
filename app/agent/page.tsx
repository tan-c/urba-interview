"use client";

import { referalCodes, ReferalCode } from "@/data/referalCode";
import { SearchResult, userActivity, UserActivity } from "@/data/userActivity";
import { useState, Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { changeStatus, createCode, getCodes } from "@/actions/referalCode";
import { useRouter } from "next/navigation";
import { getUsers } from "@/actions/user";

export default function Agent() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activity, setUserActivity] = useState([]);
  const handleCreateCode = async () => {
    createCode()
    const newCodeList = getCodes();
    setCodeList(newCodeList);
  }
  const [codeList, setCodeList] = useState<typeof referalCodes>(getCodes());
  const userList = getUsers();
  const userActivityList = userActivity
  const handleChangeStatus = (id: number, status: string) => {
    const code = codeList.find((code: ReferalCode) => code.id === id);
    if(code && (new Date(code.createdAt).getTime() - new Date().getTime())> 1000*60*60*24*30) {
      code.status = 0;
      return;
    }
    if (code) {
      changeStatus(id, Number(status));
      setCodeList(getCodes());
    }
  }
  const calculateUsedCount = (id: number) => {
    const code = codeList.find((code: ReferalCode) => code.id === id);
    const user = userList.filter((user) => user.referralCode?.includes(code?.code || ""));
    return user;
  }

  const handleTrackUser = (id: number) => {
    const users = userActivityList.filter((result) => result.userId === id);
    if (users.length > 0) {
      const searchActivities = users
        .filter((result) => result.activity_type === "search" )
      setUserActivity(searchActivities);
      if (searchActivities.length > 0) {
        setIsOpen(true);
      }else{
        alert("No search activity found");
      }
    }else{
      alert("No user activity found");
    }
  }
  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">Agent Page</h1>
      <div className="flex flex-row gap-2">
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md" 
        onClick={() => router.push("/user")}>Go to UserPage</button>
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md" 
        onClick={handleCreateCode}>Create Code</button>
      </div>
      <hr />

      <div>
        <h2>Code Usage</h2>
          {codeList.map((code: ReferalCode) => (
            <div className="flex flex-row gap-2" key={code.id}>
              <div>{code.code}</div>
              <div>{code.createdAt}</div>
              <div><select onChange={(e) => handleChangeStatus(code.id, e.target.value)}>
                <option value="1">有效</option>
                <option value="0">无效</option>
              </select></div> 
              <div>使用该验证码的用户：{calculateUsedCount(code.id).map((user) => <div style={{cursor: "pointer"}} key={user.id} onClick={() => handleTrackUser(user.id)}>{user.name}</div>)}</div>
            </div>
          ))}
      </div>
      <dialog style={{margin: "auto", minHeight: 200, maxHeight: "80vh", overflowY: "auto", border: "1px solid #ccc", padding: 10, borderRadius: 10}} open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2>User Activity</h2>
          <div>
            {activity.map((act: UserActivity) => {
                return (
                  <div key={act.id}>
                    <h4>Search Query: {act.search_query}</h4>
                    <div>
                      Search Results: {act.search_results.map((result) => (
                        <div key={result.id}>
                          <div>Description: {result.description}</div>
                          <div>ID: {result.id}</div>
                          <div>Name: {result.name}</div>
                          <div>URL: {result.url}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              return null;
            })}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </dialog>
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
                <th>Expire Date</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>{new Date(user.expireDate || "").toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  )
}   