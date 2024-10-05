import Link from "next/link"
import PrimaryLink from "./PrimaryLink"
import LinkButton from "./LinkButton"
import Container from "./Container"

const links = [
  {
    href: "#about",
    text: "About"
  },
  {
    href: "#experience",
    text: "Experience"
  },
  {
    href: "#",
    text: "Projects"
  }
]

export default function Navbar() {
  return (
    <header className="bg-charcoal text-white relative h-16 lg:py-4 lg:h-fit">
      <Container>
        <nav className="flex flex-row justify-between items-center h-full">
          <Link
            href="/"
            className="text-heading5Desktop font-bold relative z-10 lg:z-0 lg:static"
          >
            Ollie Payne
          </Link>
          <div className="bg-charcoal absolute left-0 top-0 max-h-screen flex justify-between pl-2 pt-16 pb-8 w-full lg:h-fit lg:p-0 lg:static lg:flex-row lg:bg-transparent lg:w-fit">
            <ul className="flex flex-col lg:flex-row">
              {links.map(({ href, text }, index) => (
                <li key={`nav-link-${index}`} className="mb-4 lg:mb-0 lg:mr-6">
                  <PrimaryLink href={href} text={text} />
                </li>
              ))}
              <li className="ml-2 lg:m-0">
                <LinkButton href="#" text="Contact Me" />
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}
