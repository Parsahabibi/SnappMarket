/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript:{
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cdn.snapp.market'],
  },
}

module.exports = nextConfig
