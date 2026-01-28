"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`)
      .then((res) => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then((data) => {
        setStatus(data.message);
      })
      .catch(() => {
        setError("Could not connect to backend");
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="mb-4 text-2xl font-semibold text-black dark:text-white">
          Inventory System - test
        </h1>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">{status}</p>
        )}
      </div>
    </main>
  );
}
