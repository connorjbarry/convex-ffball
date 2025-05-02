"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({
  useIconsOnly = true,
}: {
  useIconsOnly?: boolean;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={useIconsOnly ? "icon" : "sm"}
          className={`${useIconsOnly ? "" : "justify-start"}`}
        >
          <Sun
            className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${useIconsOnly ? "" : " mr-2"}`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${useIconsOnly ? "" : "mr-2"}`}
          />
          {/* {useIconsOnly === false
            ? theme === "dark"
              ? "Dark"
              : "Light"
            : null} */}
          {useIconsOnly === false && (
            <>
              <span className="dark:hidden">Light</span>
              <span className="hidden dark:inline">Dark</span>
            </>
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
