/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/app/guilds",
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
