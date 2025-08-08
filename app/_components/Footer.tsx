import Container from "@/app/_components/Container"
// import NavLink from "@/app/_components/NavLink"
import SocialIcon from "@/app/_components/SocialIcon"
// import LinkButton from "@/app/_components/LinkButton"
import Outlink from "@/app/_components/Outlink"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Resume } from "@/app/types"

// const linkMenus = [
//   {
//     primaryLink: {
//       href: "/",
//       text: "Home"
//     },
//     secondaryLinks: []
//   },
//   {
//     primaryLink: {
//       href: "/#about",
//       text: "About"
//     },
//     secondaryLinks: []
//   },
//   {
//     primaryLink: {
//       href: "/#projects",
//       text: "Projects"
//     },
//     secondaryLinks: []
//   },
//   {
//     primaryLink: {
//       href: "/#experience",
//       text: "Experience"
//     },
//     secondaryLinks: []
//   }
// ]

export default async function Footer() {
  const resume: Resume = await getStrapiData("/api/resume?populate=*")

  return (
    <footer className="bg-charcoal pb-16 pt-4 lg:py-4 text-white">
      <Container variant="narrow">
        {/* <ul className="flex flex-wrap mt-4 justify-between">
          {linkMenus.map((linkMenu, index) => (
            <li key={`footer-link-menu-${index}`} className="gap-4">
              <NavLink {...linkMenu.primaryLink} variant="footer menu" />
            </li>
          ))}
        </ul> */}
        {/* <div className="flex flex-col justify-between items-center mt-8 gap-4 border-themeLightGray border-solid border-t-[1px] pt-8 lg:flex-row"> */}
        <ul className="flex justify-center items-center">
          <li className="mr-8">
            <Outlink
              href={
                resume?.file?.url
                  ? (getStrapiMedia(resume.file.url) as string)
                  : "#"
              }
              text="Resume"
            />
          </li>
          <li className="mr-8">
            <a
              href="https://www.linkedin.com/in/oliverpayne01/"
              rel="noreferrer noopener nofollow"
              target="_blank"
              className="relative"
            >
              <span className="pointer-events-none opacity-0 absolute">
                LinkedIn
              </span>
              <SocialIcon platform="LinkedIn" className="fill-white" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/olliepayne"
              rel="noreferrer noopener nofollow"
              target="_blank"
              className="relative"
            >
              <span className="pointer-events-none opacity-0 absolute">
                GitHub
              </span>
              <SocialIcon platform="GitHub" className="fill-white" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
