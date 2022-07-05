import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_APP_ID!,
            clientSecret: process.env.DISCORD_APP_SECRET!,
            authorization: { params: { scope: "identify guilds" } }
        })
    ],
    theme: {
        colorScheme: "dark"
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token as string;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            return session;
        }
    }
    // debug: true
});
