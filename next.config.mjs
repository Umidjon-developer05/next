import withPWA from "next-pwa";

const nextConfig = {};

export default withPWA({
  dest: "public",
  ...nextConfig,
});
