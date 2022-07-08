/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "images.pexels.com",
            "cdn.discordapp.com",
            "seeklogo.com",
            "exploringbits.com"
        ]
    },
    async redirects() {
        return [
            {
                source: "/dashboard",
                destination: "/dashboard/guilds",
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
