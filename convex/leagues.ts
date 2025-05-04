import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("leagues").collect();
  },
});

export const create = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new ConvexError("You must be logged in to create a league");
    }

    const league = await ctx.db.insert("leagues", {
      name: args.name,
      comissioner: userId,
    });
    return league;
  },
});

export const getByUserId = query({
  args: {},
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    const leagues = await ctx.db.query("leagues").collect();
    const userTeams = (await ctx.db.query("teams").collect()).filter(
      (team) => team.owner === userId
    );

    return leagues.filter((league) =>
      league.teams?.map((teamId) =>
        userTeams.map((team) => team._id === teamId)
      )
    );
  },
});

export const getUserLeaguesCount = query({
  args: {},
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    const leagues = await ctx.db.query("leagues").collect();
    const userTeams = (await ctx.db.query("teams").collect()).filter(
      (team) => team.owner === userId
    );

    return leagues.filter((league) =>
      league.teams?.map((teamId) =>
        userTeams.map((team) => team._id === teamId)
      )
    ).length;
  },
});
