import getStrapiUrl from "@/app/_helpers/getStrapiUrl"

export default async function getStrapiData(url: string, cache?: RequestCache) {
  try {
    const response = await fetch(getStrapiUrl() + url, {
      cache
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
