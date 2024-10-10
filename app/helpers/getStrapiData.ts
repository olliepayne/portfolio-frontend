export default async function getStrapiData(url: string, cache?: RequestCache) {
  function getBaseUrl() {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:1337"
    } else if (process.env.NODE_ENV === "production") {
      return process.env.STRAPI_URL
    }
  }
  const baseUrl = getBaseUrl()

  try {
    const response = await fetch(baseUrl + url, {
      cache
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
