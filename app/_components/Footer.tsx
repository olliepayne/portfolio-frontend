import Container from "@/app/_components/Container"
import NavLink from "@/app/_components/NavLink"
import Link from "next/link"

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
      <Container>
        <div className="flex justify-between items-center">
          <div className="basis-1/3">
            <Link href="/" className="text-heading5Desktop font-bold">
              Ollie Payne
            </Link>
            <div className="flex mt-4 justify-between">
              {linkMenus.map((linkMenu, index) => (
                <div
                  key={`footer-link-menu-${index}`}
                  // className={`${
                  //   index < linkMenus.length - 1 ? "mr-4" : undefined
                  // }`}
                >
                  <NavLink
                    href={linkMenu.primaryLink.href}
                    text={linkMenu.primaryLink.text}
                    className="pb-1 relative after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>{/* social links */}</div>
        </div>
      </Container>
    </footer>
  )
}
