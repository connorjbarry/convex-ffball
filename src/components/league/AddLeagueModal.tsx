"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function AddLeagueModal() {
  const [leagueName, setLeagueName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const createLeague = useMutation(api.leagues.create);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await createLeague({
      name: leagueName,
    });
    setLeagueName("");

    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-end w-full">
          <Button variant="default">Create League</Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add League</DialogTitle>
          <DialogDescription>
            Create a new league to compete in
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={leagueName}
                onChange={(e) => {
                  setLeagueName(e.target.value);
                }}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            {/* <DialogClose
              disabled={leagueName === ""}
              className="disabled:cursor-not-allowed"
              type="submit"
            > */}
            <Button disabled={leagueName === ""} type="submit">
              Create
            </Button>
            {/* </DialogClose> */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
