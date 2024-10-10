import Heading from "@/app/_components/Heading"
import Container from "@/app/_components/Container"
import Outlink from "@/app/_components/Outlink"
import SocialIcon from "@/app/_components/SocialIcon"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      <Container variant="narrow">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div>
            <Heading level="h1">Contact Me</Heading>
            <ul className="mt-4">
              <li>
                <Outlink href="mailto:olliepayne@me.com?subject=Portfolio%20Site%20Inquiry">
                  olliepayne@me.com
                </Outlink>
              </li>
              <li className="mt-2">
                <Outlink href="#" download>
                  Download Resume
                </Outlink>
              </li>
            </ul>
            <ul className="mt-4">
              <li className="inline-block mr-4 align-middle">
                <a
                  href="https://www.linkedin.com/in/oliverpayne01/"
                  target="_blank"
                >
                  <SocialIcon platform="LinkedIn" className="fill-charcoal" />
                </a>
              </li>
              <li className="inline-block align-middle">
                <a href="https://github.com/olliepayne" target="_blank">
                  <SocialIcon platform="GitHub" className="fill-charcoal" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src="https://media.tenor.com/ZPHHiCRxrlsAAAAi/happy-happy-happy-cat.gif" />
          </div>
        </div>
      </Container>
    </main>
  )
}
