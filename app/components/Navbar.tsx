import Link from "next/link"
import PrimaryLink from "./PrimaryLink"
import LinkButton from "./LinkButton"
import Container from "./Container"

const links = [
  {
    href: "/experience",
    text: "Experience"
  },
  {
    href: "#",
    text: "Projects"
  },
  {
    href: "#",
    text: "About"
  }
]

export default function Navbar() {
  return (
    <header className="bg-charcoal text-white relative h-16 md:py-4 md:h-fit">
      <Container className="h-full">
        <nav className="flex flex-row justify-between items-center h-full">
          <Link
            href="/"
            className="text-heading5Desktop font-bold relative z-10 md:z-0 md:static"
          >
            Oliver Payne
          </Link>
          <div className="bg-charcoal absolute left-0 top-0 max-h-screen flex justify-between pl-2 pt-16 pb-8 w-full md:h-fit md:p-0 md:static md:flex-row md:bg-transparent md:w-fit">
            <ul className="flex flex-col md:flex-row">
              {links.map(({ href, text }) => (
                <li className="mb-4 md:mb-0 md:mr-6">
                  <PrimaryLink href={href} text={text} />
                </li>
              ))}
              <li className="ml-2 md:m-0">
                <LinkButton href="#" text="Contact Me" />
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}
