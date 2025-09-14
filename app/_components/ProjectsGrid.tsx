import { Project } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import ProjectCard from "@/app/_components/ProjectCard"

export default async function ProjectsGrid() {
  const url = `/api/projects?populate=*`
  const data: Project[] = await getStrapiData(url)

  return (
    <div className="grid gap-8 grid-cols-2 grid-rows-[500px] auto-rows-[350px]">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          {...item}
          className={index === 0 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  )
}
