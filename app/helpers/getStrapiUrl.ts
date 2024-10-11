export default function getStrapiUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:1337"
  } else if (process.env.NODE_ENV === "production") {
    return process.env.STRAPI_URL
  }
}
