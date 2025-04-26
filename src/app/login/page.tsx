"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const searchParams = useSearchParams();

  const [isRegister, setIsRegister] = useState(searchParams.get("register"));

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-full">
        {isRegister ? (
          <h1 className="text-4xl">Register</h1>
        ) : (
          <h1 className="text-4xl">Login</h1>
        )}
      </div>
    </div>
  );
}
