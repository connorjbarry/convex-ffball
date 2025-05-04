"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl">Dashboard</h1>
    </div>
  );
}
