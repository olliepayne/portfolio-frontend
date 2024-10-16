import Heading from "@/app/_components/Heading"
import Container from "@/app/_components/Container"
import Outlink from "@/app/_components/Outlink"
import SocialIcon from "@/app/_components/SocialIcon"
import { Metadata } from "next"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Resume, SEO } from "@/app/types"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import Image from "next/image"

export async function generateMetadata(): Promise<Metadata> {
  const data: { seo: SEO } = await getStrapiData(
    "/api/contact-page?populate=seo"
  )

  return data
    ? {
        title: data.seo.titleTag ? data.seo.titleTag : "Title tag",
        description: data.seo.metaDescription
          ? data.seo.metaDescription
          : "Meta description"
      }
    : {
        title: "Title tag",
        description: "Meta description"
      }
}

export default async function ContactPage() {
  const resume: Resume = await getStrapiData("/api/resume?populate=*")

  return (
    <main className="min-h-screen py-16">
      <Container variant="narrow">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div>
            <Heading level="h1">Contact Me</Heading>
            <ul className="mt-4">
              <li>
                <Outlink
                  href="mailto:olliepayne@me.com?subject=Portfolio%20Site%20Inquiry"
                  text="olliepayne@me.com"
                />
              </li>
              <li className="mt-2">
                <Outlink
                  href={
                    resume?.file?.url
                      ? (getStrapiMedia(resume.file.url) as string)
                      : "#"
                  }
                  text="Resume"
                />
              </li>
            </ul>
            <ul className="mt-4">
              <li className="inline-block mr-4 align-middle">
                <a
                  href="https://www.linkedin.com/in/oliverpayne01/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <span className="hidden">LinkedIn</span>
                  <SocialIcon platform="LinkedIn" className="fill-charcoal" />
                </a>
              </li>
              <li className="inline-block align-middle">
                <a
                  href="https://github.com/olliepayne"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <span className="hidden">GitHub</span>
                  <SocialIcon platform="GitHub" className="fill-charcoal" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://media.tenor.com/ZPHHiCRxrlsAAAAi/happy-happy-happy-cat.gif"
              alt="Happy cat gif."
              width={340}
              height={340}
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
