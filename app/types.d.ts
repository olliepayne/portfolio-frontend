export interface StrapiImage {
  url: string
  alternativeText: string
}

export interface Skill {
  name: string
}

export interface Job {
  title: string
  employmentType: string
  startDate: string
  endDate: string
  stillHere: boolean
  location: string
  remote: boolean
  summary: string
  skills: Skill[]
  company: Company
}

export interface Company {
  name: string
  logo: StrapiImage
  jobs: Job[]
}

export interface Project {
  name: string
  slug: string
  mainImage: StrapiImage
  summary: string
  skills: Skill[]
  requestContent: string
  secondaryImage: StrapiImage
  strategyContent: string
  resultsContent: string
  resultsImage: StrapiImage
}
