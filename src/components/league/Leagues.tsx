"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Doc } from "../../../convex/_generated/dataModel";
import Link from "next/link";

function LeagueRow({ league }: { league: Doc<"leagues"> }) {
  const user = useQuery(api.users.getById, { userId: league.comissioner });
  return (
    <Link href={`/leagues/${league._id}`}>
      <div key={league._id} className="border rounded p-2 flex justify-between">
        <div>
          <div>{league.name}</div>
          <div>{user?.name ?? user?.email}</div>
        </div>
      </div>
    </Link>
  );
}

export default function Leagues() {
  const leagues = useQuery(api.leagues.get);

  return (
    <div className="flex flex-col gap-2">
      {leagues?.map((league) => <LeagueRow league={league} />)}
    </div>
  );
}
