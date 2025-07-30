/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*"
      },
      {
        protocol: "https",
        hostname: "**.media.strapiapp.com"
      },
      {
        protocol: "https",
        hostname: "media.tenor.com"
      }
    ]
  }
}

export default nextConfig
