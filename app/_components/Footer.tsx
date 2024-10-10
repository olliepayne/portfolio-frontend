import Container from "@/app/_components/Container"
import NavLink from "@/app/_components/NavLink"
import Link from "next/link"
import SocialIcon from "@/app/_components/SocialIcon"
import LinkButton from "@/app/_components/LinkButton"
import Outlink from "@/app/_components/Outlink"

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

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-white">
      <Container variant="narrow">
        <Link href="/" className="text-heading5Desktop font-bold">
          Ollie Payne
        </Link>
        <div className="flex flex-wrap mt-4 justify-between">
          {linkMenus.map((linkMenu, index) => (
            <div
              key={`footer-link-menu-${index}`}
              className={`${index < linkMenus.length - 1 ? "mr-4" : undefined}`}
            >
              <NavLink {...linkMenu.primaryLink} variant="footer menu" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-8 border-themeLightGray border-solid border-t-[1px] pt-8">
          <ul className="flex flex-col items-center">
            <li>
              <Outlink href="mailto:olliepayne@me.com?subject=Portfolio%20Site%20Inquiry">
                olliepayne@me.com
              </Outlink>
            </li>
            <li className="mt-2">
              <Outlink href="" download>
                Download Resume
              </Outlink>
            </li>
          </ul>
          <ul className="flex justify-between items-center mt-4">
            <li className="mr-4">
              <a
                href="https://github.com/olliepayne"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oliverpayne01/"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="LinkedIn" />
              </a>
            </li>
          </ul>
          <LinkButton
            href="/contact"
            text="Contact Me"
            variant="primary"
            className="hover:text-black mt-4"
          />
        </div>
      </Container>
    </footer>
  )
}
