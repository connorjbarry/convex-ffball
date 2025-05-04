import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("teams").collect();
  },
});

export const getByUserId = query({
  args: {},
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    return (await ctx.db.query("teams").collect()).filter(
      (team) => team.owner === userId
    );
  },
});
