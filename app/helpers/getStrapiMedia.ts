export function getStrapiMedia(url: string | null) {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:1337${url}`
  } else if (process.env.NODE_ENV === "production") {
    return `${process.env.STRAPI_MEDIA_URL}${url}`
  }
}
