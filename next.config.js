// @ts-check
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    require("./nock-setup");
  }

  /** @type {import('next').NextConfig} **/
  return {
    transpilePackages: ["lucide-react"],
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  };
};
