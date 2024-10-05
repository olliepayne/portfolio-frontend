export interface Skill {
  name: string
}

export interface Job {
  title: string
  employmentType: string
  startDate: string
  endDate?: string
  stillHere: boolean
  location: string
  remote: boolean
  summary: string
  skills: Skill[]
}

export interface Company {
  name: string
  logo: {
    url: string
    alternativeText: string
  }
  jobs: Job[]
}
