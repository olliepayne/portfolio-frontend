import Container from "@/app/_components/Container"
import ThemeToggleButton from "@/app/_components/ThemeToggleButton"

export default function Footer() {
  return (
    <footer className="py-16">
      <Container>
        <div className="flex justify-between items-center">
          <span className="dark:text-off-white text-body-sm text-gray">
            Copyright &copy; {new Date().getFullYear()}, Oliver Payne
          </span>
          <ThemeToggleButton />
        </div>
      </Container>
    </footer>
  )
}
