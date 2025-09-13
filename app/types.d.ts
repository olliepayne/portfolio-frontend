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

export interface SkillTag {
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
  content: string
  company?: Company
  duration: string
  skillTags?: SkillTag[]
}

export interface PostCategory {
  name: string
}

export interface Post {
  slug: string
  title: string
  content: string
  publishedAt: string
  updatedAt: string
  mainImage: StrapiImage
  summary: string
  seo: SEO
  postCategory?: PostCategory
  skillTags?: SkillTag[]
}
