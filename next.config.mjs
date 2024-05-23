/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 1000,
      aggregateTimeout: 200,
    },
  }),
};

export default nextConfig;
