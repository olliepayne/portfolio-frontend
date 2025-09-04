import Container from "@/app/_components/Container"
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

export default function TopNavigationBar() {
  return (
    <nav className="py-4 border-b-[1px] border-light-gray">
      <Container>
        <div className="flex justify-between">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
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
      </Container>
    </nav>
  )
}
