export interface Skill {
  name: string
}

export interface Job {
  title: string
  employmentType: string
  startDate: string
  endDate?: string
  location: string
  remote: boolean
  summary: string
  skills: Skill[]
}

export interface Company {
  name: string
  logo: StrapiImage
  jobs: Job[]
}

export interface StrapiImage {
  url: string
  alternativeText: string
}
