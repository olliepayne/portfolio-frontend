import ProjectCard from "@/app/_components/ProjectCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { FeaturedProjectsSection as IFeaturedProjectsSection } from "@/app/types"

export default async function ProjectsGrid() {
  const url = `/api/featured-projects-section?populate[main][populate]=*&populate[second][populate]=*&populate[third][populate]=*`
  const data: IFeaturedProjectsSection = await getStrapiData(url)

  return (
    <div className="grid gap-8 grid-cols-1 auto-rows-[250px] md:grid-cols-2">
      {data.main && (
        <ProjectCard {...data.main} className="md:col-span-2 md:row-span-2" />
      )}
      {data.second && <ProjectCard {...data.second} />}
      {data.third && <ProjectCard {...data.third} />}
    </div>
  )
}
