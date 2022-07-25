/** @type {import('next').NextConfig} */
module.exports = {
   eslint: {
      dirs: ["src"],
   },
   experimental: {
      forceSwcTransforms: true,
   },
   reactStrictMode: true,

   images: {
      domains: ["dummyimage.com"],
   },

   // SVGR
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: [
            {
               loader: "@svgr/webpack",
               options: {
                  typescript: true,
                  icon: true,
               },
            },
         ],
      });

      return config;
   },
};
