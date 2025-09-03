import Container from "@/app/_components/Container"

export default function Footer() {
  return (
    <footer className="py-8 mt-8">
      <Container>
        <span>Copyright &copy; {new Date().getFullYear()}, Oliver Payne</span>
      </Container>
    </footer>
  )
}
