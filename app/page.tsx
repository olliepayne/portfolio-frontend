import Container from "./components/Container"
import Image from "next/image"
import LinkButton from "./components/LinkButton"
import Divider from "./components/Divider"

const stats = [
  {
    metricText: "Years of experience",
    value: "3+"
  },
  {
    metricText: "Clients worked with",
    value: "25+"
  }
]

export default function Home() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="mr-8 basis-1/2">
              <h1 className="text-heading1Desktop font-bold">👋 I'm Ollie</h1>
              <p className="mt-4">
                I am a Frontend developer, SEO Analyst, and avid sport climber
                living in Phoenix, AZ.
              </p>
              <div className="my-16">
                <ul className="flex flex-row flex-wrap gap-8">
                  {stats.map(({ metricText, value }, index) => (
                    <li key={`intro-stat-${index}`}>
                      <div>
                        <span className="text-xl font-bold">{value}</span>
                        <p>{metricText}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LinkButton href="#" text="Contact Me" className="mr-4" />
                <p className="inline-block">My projects</p>
              </div>
            </div>
            <div className="relative mt-16 basis-1/2 aspect-square w-full md:w-auto md:mt-0 md:ml-8 ">
              <Image
                src="/headshot.jpeg"
                alt="Picture of Ollie Payne"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <Divider />
      {/* <section className="py-16">
        <Container>
          <h2 className="text-heading2Desktop font-bold">About Me</h2>
        </Container>
      </section> */}
    </main>
  )
}
