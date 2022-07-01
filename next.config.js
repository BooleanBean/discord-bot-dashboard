/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/guilds",
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
