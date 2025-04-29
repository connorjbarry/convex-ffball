"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const user = useQuery(api.users.get);

  const { signOut } = useAuthActions();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl">Dashboard</h1>
        {JSON.stringify(user)}
        <Button onClick={() => void signOut()}>Sign Out</Button>
      </div>
    </div>
  );
}
