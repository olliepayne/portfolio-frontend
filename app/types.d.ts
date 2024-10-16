export interface StrapiImage {
  url: string
  alternativeText: string
}

export interface StrapiFile {
  url: string
}

export interface Resume {
  file: StrapiFile
}

export interface SEO {
  titleTag: string
  metaDescription: string
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
  summary?: string
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
  strategyContent: string
  resultsContent: string
}

export interface FeaturedProjectsSection {
  main: Project
  second: Project
  third: Project
}

export interface BlogPost {
  slug: string
  title: string
  content: string
  publishedOn: string
  updatedOn?: string
  mainImage: StrapiImage
  summary: string
  seo: SEO
  skills: Skill[]
}
