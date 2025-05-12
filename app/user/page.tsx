"use client";

import { useState } from "react";

export default function User() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <h1 className="text-2xl font-bold">User Page</h1>

      <hr />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2 border-gray-300 rounded-md p-2" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
        // TO BE FILLED
        console.log(input);
      }}>Use Code</button>
    </div>
  )
}   