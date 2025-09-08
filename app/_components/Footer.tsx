import Container from "@/app/_components/Container"
import ThemeSwitch from "@/app/_components/ThemeSwitch"

export default function Footer() {
  return (
    <footer className="py-16 border-t-2 dark:border-off-black border-light-gray">
      <Container>
        <div className="flex justify-between items-center">
          <span className="dark:text-off-white text-body-sm text-gray">
            Copyright &copy; {new Date().getFullYear()}, Oliver Payne
          </span>
          <ThemeSwitch />
        </div>
      </Container>
    </footer>
  )
}
