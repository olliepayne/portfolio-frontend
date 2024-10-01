import Container from "./components/Container"
import Image from "next/image"
import LinkButton from "./components/LinkButton"
import Divider from "./components/Divider"

export default function Home() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="flex flex-row justify-between">
            <div className="mr-4 basis-1/2">
              <h1 className="text-heading1Desktop font-bold">I'm Ollie</h1>
              <p className="my-4">
                I am a Frontend developer, SEO Analyst, and avid sport climber
                living in Phoenix, AZ.
              </p>
              <div></div>
              <div>
                <LinkButton href="#" text="Contact Me" className="mr-4" />
                <p className="inline-block">My projects</p>
              </div>
            </div>
            <div className="ml-4 relative flex-initial">
              <Image src="/headshot.jpeg" alt="" fill objectFit="cover" />
            </div>
          </div>
        </Container>
      </section>
      <Divider />
    </main>
  )
}
