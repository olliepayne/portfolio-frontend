import { Project } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import ProjectCard from "@/app/_components/ProjectCard"
import { cn } from "@/app/_utils/cn"

export default async function ProjectsGrid() {
  const url = `/api/projects?populate=*`
  const data: Project[] = await getStrapiData(url)

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 md:grid-rows-[500px] auto-rows-[350px]">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          {...item}
          className={cn(index === 0 && "md:col-span-2")}
        />
      ))}
    </div>
  )
}
