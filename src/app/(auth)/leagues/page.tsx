import AddLeagueModal from "@/components/league/AddLeagueModal";
import Leagues from "@/components/league/Leagues";

export default function LeaguesPage() {
  return (
    <div className="w-full h-full p-4">
      <AddLeagueModal />
      <div>Leagues</div>
      <Leagues />
    </div>
  );
}
