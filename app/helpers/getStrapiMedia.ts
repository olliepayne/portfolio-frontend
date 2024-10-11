import getStrapiUrl from "@/app/helpers/getStrapiUrl"

export function getStrapiMedia(url: string | null) {
  return `${getStrapiUrl()}${url}`
}
