export default async function getStrapiData(url: string, cache?: RequestCache) {
  const baseUrl = "http://localhost:1337"
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
