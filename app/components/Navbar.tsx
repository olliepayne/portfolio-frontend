import Link from "next/link"

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
                    <Link
                      href={href}
                      className="relative px-2 py-1 z-20 text-white transition-all delay-200 before:bg-primary before:absolute before:-z-10 before:left-0 before:top-0 before:transition-all before:delay-200 before:w-full before:h-full before:origin-bottom before:scale-0 after:transition-all after:ease-out after:duration-300 after:origin-center after:w-full after:h-1 after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 hover:text-black hover:before:scale-100 hover:after:scale-x-100"
                    >
                      {text}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={href}
                      className="relative px-2 py-1 z-20 text-white transition-all delay-200 before:bg-primary before:absolute before:-z-10 before:left-0 before:top-0 before:transition-all before:delay-200 before:w-full before:h-full before:origin-bottom before:scale-0 after:transition-all after:ease-out after:duration-300 after:origin-center after:w-full after:h-1 after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 hover:text-black hover:before:scale-100 hover:after:scale-x-100"
                    >
                      {text}
                    </Link>
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
