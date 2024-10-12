import Container from "@/app/_components/Container"
import NavLink from "@/app/_components/NavLink"
import Link from "next/link"
import SocialIcon from "@/app/_components/SocialIcon"
import LinkButton from "@/app/_components/LinkButton"
import Outlink from "@/app/_components/Outlink"
import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Resume } from "@/app/types"

const linkMenus = [
  {
    primaryLink: {
      href: "/#about",
      text: "About"
    },
    secondaryLinks: []
  },
  {
    primaryLink: {
      href: "/#projects",
      text: "Projects"
    },
    secondaryLinks: []
  },
  {
    primaryLink: {
      href: "/#experience",
      text: "Experience"
    },
    secondaryLinks: []
  }
]

export default async function Footer() {
  const resume: Resume = await getStrapiData("/api/resume?populate=*")

  return (
    <footer className="bg-charcoal py-16 text-white">
      <Container variant="narrow">
        <Link href="/" className="text-heading5Desktop font-bold">
          Ollie Payne
        </Link>
        <ul className="flex flex-wrap mt-4 justify-between">
          {linkMenus.map((linkMenu, index) => (
            <li key={`footer-link-menu-${index}`} className="gap-4">
              <NavLink {...linkMenu.primaryLink} variant="footer menu" />
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between items-center mt-8 gap-4 border-themeLightGray border-solid border-t-[1px] pt-8 lg:flex-row">
          <ul>
            <li>
              <Outlink href="mailto:olliepayne@me.com?subject=Portfolio%20Site%20Inquiry">
                olliepayne@me.com
              </Outlink>
            </li>
            <li className="mt-2">
              <Outlink
                href={
                  resume?.file?.url
                    ? (getStrapiMedia(resume.file.url) as string)
                    : "#"
                }
              >
                Resume
              </Outlink>
            </li>
          </ul>
          <ul className="flex justify-between items-center">
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/oliverpayne01/"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="LinkedIn" className="fill-white" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/olliepayne"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="GitHub" className="fill-white" />
              </a>
            </li>
          </ul>
          <LinkButton
            href="/contact"
            text="Contact Me"
            variant="primary"
            className="hover:text-black"
          />
        </div>
      </Container>
    </footer>
  )
}
