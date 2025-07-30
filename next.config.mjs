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
        hostname: "lively-dawn-f83184edbe.strapiapp.com"
      },
      {
        protocol: "https",
        hostname: "media.tenor.com"
      }
    ]
  }
}

export default nextConfig
