import Link from "next/link"

const links = [
  {
    href: "/#portfolio",
    text: "Portfolio"
  },
  {
    href: "/#work-history",
    text: "Work history"
  }
]

export default function TopNavigation() {
  return (
    <nav className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between">
        <Link href="/" className="transition-colors hover:text-primary">Home</Link>
        <ul className="flex">
          {links.map((item, index) => (
            <li className="ml-8" key={`top-nav-link-${index}`}>
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
