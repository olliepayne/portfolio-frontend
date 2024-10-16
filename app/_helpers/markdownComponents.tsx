import { Components } from "react-markdown"
import Heading from "@/app/_components/Heading"
import Outlink from "@/app/_components/Outlink"
import InternalLink from "@/app/_components/InternalLink"

const markdownComponents: Partial<Components> = {
  h2(props) {
    const { children } = props
    return (
      <Heading level="h2" className="mt-6">
        {children}
      </Heading>
    )
  },
  h3(props) {
    const { children } = props
    return (
      <Heading level="h3" className="mt-6">
        {children}
      </Heading>
    )
  },
  h4(props) {
    const { children } = props
    return (
      <Heading level="h4" className="mt-6">
        {children}
      </Heading>
    )
  },
  h5(props) {
    const { children } = props
    return (
      <Heading level="h5" className="mt-6">
        {children}
      </Heading>
    )
  },
  p(props) {
    const { children } = props
    return <p className="mt-6">{children}</p>
  },
  ul(props) {
    const { children } = props
    return <ul className="list-disc pl-10 mt-6">{children}</ul>
  },
  ol(props) {
    const { children } = props
    return <ol className="list-decimal pl-10 mt-6">{children}</ol>
  },
  img(props) {
    return (
      <span className="block mx-auto w-fit my-8">
        <img
          src={props.src}
          alt={props.alt}
          className="object-cover drop-shadow-xl-darker"
        />
      </span>
    )
  },
  a(props) {
    const domainName =
      (process.env.NODE_ENV === "production" && "https://olliepayne") ||
      (process.env.NODE_ENV === "development" && "http://localhost:3000")
    if (props.href?.split(".")[0] !== domainName) {
      return <Outlink href={props.href as string}>{props.children}</Outlink>
    } else {
      return <InternalLink href={props.href}>{props.children}</InternalLink>
    }
  }
}
export default markdownComponents
