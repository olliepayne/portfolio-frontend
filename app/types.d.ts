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
  jobs?: Job[]
}

export interface Project {
  name: string
  slug: string
  seo: SEO
  mainImage: StrapiImage
  summary: string
  skills?: Skill[]
  requestContent: string
  strategyContent: string
  takeawaysContent: string
  type: "Personal" | "Professional"
}

export interface FeaturedProjectsSection {
  main?: Project
  second?: Project
  third?: Project
}

export interface BlogPost {
  slug: string
  title: string
  content: string
  publishedAt: string
  updatedAt: string
  mainImage: StrapiImage
  summary: string
  seo: SEO
  skills?: Skill[]
}
