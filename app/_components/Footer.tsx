import Container from "@/app/_components/Container"
import NavLink from "@/app/_components/NavLink"
import Link from "next/link"
import SocialIcon from "@/app/_components/SocialIcon"

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
        <div className="mt-8 border-themeLightGray border-solid border-t-2 pt-8">
          <ul className="w-fit mx-auto">
            <li className="inline-block align-middle mr-4">
              <a
                href="https://github.com/olliepayne"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="GitHub" />
              </a>
            </li>
            <li className="inline-block align-middle">
              <a
                href="https://www.linkedin.com/in/oliverpayne01/"
                target="_blank"
                className="inline-block"
              >
                <SocialIcon platform="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}