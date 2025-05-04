import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const teamTables = defineTable({
  name: v.string(),
  owner: v.id("users"),
  league: v.id("leagues"),
});

const leagueTables = defineTable({
  name: v.string(),
  comissioner: v.id("users"),
  teams: v.optional(v.array(v.id("teams"))),
});

const schema = defineSchema({
  ...authTables,
  teams: teamTables,
  leagues: leagueTables,
});

export default schema;
