import Link from "next/link"
import PrimaryLink from "./PrimaryLink"

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
    <header className="bg-charcoal px-3 py-4 text-white relative">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="text-heading5Desktop font-bold">
            Oliver Payne
          </Link>
          <nav className="">
            <ul className="flex flex-row">
              {links.map(({ href, text }, index) =>
                index < links.length - 1 ? (
                  <li className="mr-6">
                    <PrimaryLink href={href} text={text} />
                  </li>
                ) : (
                  <li>
                    <PrimaryLink href={href} text={text} />
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}