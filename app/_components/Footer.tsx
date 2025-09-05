import Container from "@/app/_components/Container"

export default function Footer() {
  return (
    <footer className="py-8 mt-8">
      <Container>
        <span className="dark:text-off-white text-body-sm text-gray">Copyright &copy; {new Date().getFullYear()}, Oliver Payne</span>
      </Container>
    </footer>
  )
}
