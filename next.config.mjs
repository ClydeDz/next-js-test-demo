/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-js-test-demo",
  reactStrictMode: true,
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
    };
  },
};

export default nextConfig;
