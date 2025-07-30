// import getStrapiUrl from "@/app/helpers/getStrapiUrl"

export function getStrapiMedia(url: string | null) {
  // return `${getStrapiUrl()}${url}`
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:1337${url}`
  } else if (process.env.NODE_ENV === "production") {
    return url
  }
}
