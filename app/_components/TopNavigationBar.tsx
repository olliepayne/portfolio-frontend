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
  },
  {
    href: "/#writing",
    text: "Writing"
  },
]

export default function TopNavigationBar() {
  return (
    <nav className="py-4 border-b-2 dark:border-off-black border-light-gray">
      <Container>
        <div className="flex justify-between">
          <Link href="/" className="transition-colors dark:hover:text-primary-intense hover:text-primary">
            Home
          </Link>
          <div className="flex items-center">
            {links.map((item, index) => (
              <Link
                href={item.href}
                key={`top-nav-link-${index}`}
                className="ml-8 transition-colors dark:hover:text-primary-intense hover:text-primary"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  )
}
