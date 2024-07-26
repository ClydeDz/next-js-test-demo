// @ts-check
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-js-test-demo",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
