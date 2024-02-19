/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes(".svg")
    );

    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
      loader: "@svgr/webpack",
    });

    return config;
  },
};

export default nextConfig;
