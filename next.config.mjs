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
        hostname: "funny-oasis-8038f3a347.media.strapiapp.com",
        port: "",
        pathname: "/**/*"
      }
    ]
  }
}

export default nextConfig
