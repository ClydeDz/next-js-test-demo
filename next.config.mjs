/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/out",
  reactStrictMode: true,
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
    };
  },
};

export default nextConfig;
