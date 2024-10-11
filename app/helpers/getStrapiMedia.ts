import getStrapiUrl from "@/app/helpers/getStrapiUrl"

export function getStrapiMedia(url: string | null) {
  if (url == null) return null
  if (url.startsWith("data:")) return url
  if (url.startsWith("http") || url.startsWith("//")) return url
  return `${getStrapiUrl()}${url}`
}
