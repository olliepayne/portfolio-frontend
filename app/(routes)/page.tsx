import getStrapiData from "@/app/_utils/getStrapiData"
import { Metadata } from "next"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SocialCard from "@/app/_components/SocialCard"
import ProjectsGrid from "@/app/_components/ProjectsGrid"
import WorkHistoryTable from "@/app/_components/WorkHistoryTable"
import PostsGrid from "@/app/_components/PostsGrid"

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStrapiData("/api/homepage?populate=seo")
  const { seo } = data

  return {
    title: seo.titleTag,
    description: seo.metaDescription
  }
}

export default async function Home() {
  const resume = await getStrapiData("/api/resume?populate=file")
  const posts = await getStrapiData("/api/posts?populate=*")

  return (
    <>
      <header className="mt-20 md:mt-32">
        <Container>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="mr-16 flex-2/3">
              <div className="flex items-center">
                <Heading level="h1">Oliver {"(Ollie)"} Payne</Heading>
                <Image
                  src="https://media.tenor.com/ZPHHiCRxrlsAAAAi/happy-happy-happy-cat.gif"
                  alt="Happy cat gif"
                  width={100}
                  height={100}
                  unoptimized
                  loading="eager"
                />
              </div>
              <p className="mt-4 text-body-large">
                I&apos;m an English <mark>software developer</mark> living in
                Phoenix, Arizona. I got into the tech agency/startup world at
                the age of 19 and have spent the last{" "}
                {new Date().getFullYear() - 2021}+ years there.
              </p>
            </div>
            <Image
              src="/images/headshot.jpeg"
              alt="Ollie Payne headshot"
              priority
              width={300}
              height={300}
              className="rounded-md mt-16 min-h-[300px] object-cover shadow-md md:mt-0"
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mt-16">
            <SocialCard type="GitHub" />
            <SocialCard type="LinkedIn" />
            <SocialCard type="Resume" resume={resume} />
          </div>
        </Container>
      </header>

      <section className="mt-20 md:mt-32">
        <Container className="border-t-2 dark:border-off-black border-light-gray pt-16">
          <Heading level="h2" id="portfolio">
            Portfolio
          </Heading>
          <div className="mt-8">
            <ProjectsGrid />
          </div>
        </Container>
      </section>

      <section className="mt-20 md:mt-32">
        <Container className="border-t-2 dark:border-off-black border-light-gray pt-16">
          <Heading level="h2" id="work-history">
            Work history
          </Heading>
          <WorkHistoryTable />
        </Container>
      </section>

      <section className="mt-20 md:mt-32">
        <Container className="border-t-2 dark:border-off-black border-light-gray pt-16">
          <Heading level="h2" id="writing">
            Writing
          </Heading>
          {posts && <PostsGrid posts={posts} />}
        </Container>
      </section>
    </>
  )
}
