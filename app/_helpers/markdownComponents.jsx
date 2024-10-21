import Heading from "@/app/_components/Heading"
import Outlink from "@/app/_components/Outlink"
import InternalLink from "@/app/_components/InternalLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Image from "next/image"

const markdownComponents = {
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
      <span className="relative block mx-auto w-fit my-8">
        <Image
          src={props.src}
          alt={props.alt}
          className="object-cover drop-shadow-xl-darker"
          fill
        />
      </span>
    )
  },
  a(props) {
    const domainName =
      (process.env.NODE_ENV === "production" && "https://olliepayne") ||
      (process.env.NODE_ENV === "development" && "http://localhost:3000")
    if (props.href?.split(".")[0] !== domainName) {
      return (
        <Outlink href={props.href} text={props.children} />
      )
    } else {
      return <InternalLink href={props.href} text={props.children} />
    }
  },
  code(props) {
    return (
      <code className="py-1 px-1.5 text-white bg-charcoal text-sm rounded-sm">
        {props.children}
      </code>
    )
  },
  pre(props) {
    const language = props.children.props.className.split("-")[1]

    return (
      <SyntaxHighlighter
        style={atomDark}
        PreTag="div"
        language={language}
        customStyle={{
          fontSize: "0.875rem",
          marginTop: "1.5rem"
        }}
      >
        {String(props.children.props.children)}
      </SyntaxHighlighter>
    )
  }
}
export default markdownComponents