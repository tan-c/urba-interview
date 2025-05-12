"use client";

export default function Home() {
  return (
    <div className="flex flex-row gap-2 items-center justify-center h-screen">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => window.location.href = "/user"}> User Page</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => window.location.href = "/agent"}> Agent Page</button>
    </div>
  );
}
