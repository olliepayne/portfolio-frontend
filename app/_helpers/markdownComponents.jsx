import Heading from "@/app/_components/Heading"
import Outlink from "@/app/_components/Outlink"
import InternalLink from "@/app/_components/InternalLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const markdownComponents = {
  h2(props) {
    const { children } = props
    return (
      <Heading level="h2" className="mt-10 first:mt-0">
        {children}
      </Heading>
    )
  },
  h3(props) {
    const { children } = props
    return (
      <Heading level="h3" className="mt-6 first:mt-0">
        {children}
      </Heading>
    )
  },
  h4(props) {
    const { children } = props
    return (
      <Heading level="h4" className="mt-6 first:mt-0">
        {children}
      </Heading>
    )
  },
  h5(props) {
    const { children } = props
    return (
      <Heading level="h5" className="mt-6 first:mt-0">
        {children}
      </Heading>
    )
  },
  p(props) {
    const { children } = props
    return <p className="mt-6 first:mt-0">{children}</p>
  },
  ul(props) {
    const { children } = props
    return (
      <ul className="list-disc pl-10 mt-6 space-y-2 first:mt-0">{children}</ul>
    )
  },
  ol(props) {
    const { children } = props
    return (
      <ol className="list-decimal pl-10 mt-6 space-y-2 first:mt-0">
        {children}
      </ol>
    )
  },
  img(props) {
    console.log(props.src)
    return (
      <img
        src={props.src}
        alt={props.alt}
        className="object-cover drop-shadow-xl block my-12 mx-auto"
      />
    )
  },
  a(props) {
    const domainName =
      (process.env.NODE_ENV === "production" && "https://olliepayne") ||
      (process.env.NODE_ENV === "development" && "http://localhost:3000")
    if (props.href?.split(".")[0] !== domainName) {
      return <Outlink href={props.href} text={props.children} />
    } else {
      return <InternalLink href={props.href} text={props.children} />
    }
  },
  code(props) {
    return (
      <code className="inline-block px-1 bg-charcoal text-sm text-themeLightGray rounded-[4px]">
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
          marginTop: "1.5rem",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          ":firstChild": {
            marginTop: "0"
          }
        }}
      >
        {String(props.children.props.children)}
      </SyntaxHighlighter>
    )
  }
}
export default markdownComponents
