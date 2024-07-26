/** @type {import('next').NextConfig} */
// import path from "path";
const path = require("path");

// const nextConfig = {
//   output: "export",
//   basePath: "/next-js-test-demo",
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
//   async exportPathMap(defaultPathMap) {
//     return {
//       ...defaultPathMap,
//     };
//   },
// };

// export default nextConfig;

module.exports = {
  output: "export",
  basePath: "/next-js-test-demo",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
