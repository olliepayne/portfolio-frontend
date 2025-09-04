import Container from "@/app/_components/Container"
import Link from "next/link"
import ThemeToggleButton from "@/app/_components/ThemeToggleButton"

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
    <nav className="py-4 border-b-2 dark:border-off-black border-light-gray">
      <Container>
        <div className="flex justify-between">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <div className="flex">
            {links.map((item, index) => (
              <Link
                href={item.href}
                key={`top-nav-link-${index}`}
                className="ml-8 transition-colors dark:hover:text-primary-intense hover:text-primary"
              >
                {item.text}
              </Link>
            ))}
            <ThemeToggleButton />
          </div>
        </div>
      </Container>
    </nav>
  )
}
