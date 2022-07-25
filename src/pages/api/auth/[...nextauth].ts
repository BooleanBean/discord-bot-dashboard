import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const { DISCORD_APP_ID, DISCORD_APP_SECRET, NEXTAUTH_SECRET } = process.env;

export default NextAuth({
   providers: [
      DiscordProvider({
         clientId: DISCORD_APP_ID ?? "",
         clientSecret: DISCORD_APP_SECRET ?? "",
      }),
   ],
   secret: NEXTAUTH_SECRET ?? "",
});
