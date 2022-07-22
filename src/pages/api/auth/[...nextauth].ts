/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
   providers: [
      DiscordProvider({
         clientId: process.env.DISCORD_APP_ID!,
         clientSecret: process.env.DISCORD_APP_SECRET!,
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET!,
});
