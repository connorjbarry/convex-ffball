import { LandingNav } from "@/components/Navigation/LandingNav";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <LandingNav />
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl">
          Landing Page <span className="font-bold">|</span> In Progress
        </h1>
      </div>
    </div>
  );
}
