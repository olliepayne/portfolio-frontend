import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-charcoal px-3 py-4 text-white">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="text-heading5Desktop font-bold">
            Oliver Payne
          </Link>
          <nav className="">
            <ul className="flex flex-row">
              <li className="mr-3">
                <Link href="/experience" className="relative mr-3 hover:after:w-full after:h-1 after:bg-primary after:absolute after:bottom-0 after:left-0">
                  Experience
                </Link>
              </li>
              <li className="mr-3">
                <Link href="#" className="mr-3">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
