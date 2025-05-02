import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { DataModel } from "./_generated/dataModel";
import { ConvexError } from "convex/values";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password<DataModel>({
      profile(
        params: { email?: string; "first-name"?: string; "last-name"?: string },
        _ctx
      ) {
        let fullName = "";
        if (!params?.email) {
          throw new ConvexError("Email is required");
        }

        if (
          params?.["first-name"] &&
          typeof params?.["first-name"] === "string" &&
          params?.["last-name"] &&
          typeof params?.["last-name"] === "string"
        ) {
          fullName =
            params?.["first-name"].trim() + " " + params?.["last-name"].trim();
        }

        return {
          email: params?.email,
          name: fullName ? fullName : params?.email,
        };
      },
    }),
  ],
});
