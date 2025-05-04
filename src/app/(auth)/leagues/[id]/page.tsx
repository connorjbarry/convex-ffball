import { Id } from "../../../../../convex/_generated/dataModel";

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ id: Id<"leagues"> }>;
}) {
  const { id: leagueId } = await params;
  return <div>{leagueId}</div>;
}
