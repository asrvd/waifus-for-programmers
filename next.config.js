/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  exportPathMap: async (defaultPathMap) => {
    const paths = defaultPathMap;
    return paths;
  },
};

module.exports = nextConfig;
