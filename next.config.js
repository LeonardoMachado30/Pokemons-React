/** @type {import('next').NextConfig} */
/** @type {import('dotenv').config()} */

const isProd =
  process.env.NODE_ENV === "production"
    ? "https://leonardomachado30.github.io/Pokemons-React/"
    : process.env.STATIC_ASSETS_URL;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
