import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";

export const LandingNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span>FF</span>
        </div>
        <nav className="hidden md:flex gap-6"></nav>
        <div className="flex items-end gap-4">
          <ThemeToggle useIconsOnly={true} />
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/login?register=true">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
