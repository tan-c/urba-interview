"use client";

import { users } from "@/data/users";
import { useState } from "react";

export default function Agent() {

  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">Agent Page</h1>

      <hr />

      <div>
        <h2>Code Usage</h2>
        // TO BE FILLED
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
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  )
}   