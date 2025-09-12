import Heading from "@/app/_components/Heading"
import Outlink from "@/app/_components/Outlink"
import InternalLink from "@/app/_components/InternalLink"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  atomDark,
  oneLight
} from "react-syntax-highlighter/dist/esm/styles/prism"
import ThemeWrappedSyntaxHighlighter from "../_components/ThemeWrappedSyntaxHighlighter"

const markdownComponents = {
  h2(props) {
    const { children } = props
    return (
      <Heading level="h2" className="mt-14 mb-8 first:mt-0">
        {children}
      </Heading>
    )
  },
  h3(props) {
    const { children } = props
    return (
      <Heading level="h3" className="mt-10 mb-5 first:mt-0">
        {children}
      </Heading>
    )
  },
  h4(props) {
    const { children } = props
    return (
      <Heading level="h4" className="mt-10 mb-5 first:mt-0">
        {children}
      </Heading>
    )
  },
  p(props) {
    const { children } = props
    return <p className="my-5 leading-8 first:mt-0">{children}</p>
  },
  ul(props) {
    const { children } = props
    return (
      <ul className="list-disc pl-10 my-4 space-y-2 leading-8 first:mt-0">
        {children}
      </ul>
    )
  },
  ol(props) {
    const { children } = props
    return (
      <ol className="list-decimal pl-10 my-4 space-y-2 leading-8 first:mt-0">
        {children}
      </ol>
    )
  },
  img(props) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className="object-cover drop-shadow-md aspect-video w-full rounded-sm block mx-auto"
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
      <code className="px-2 py-1 text-sm rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
        {props.children}
      </code>
    )
  },
  pre(props) {
    const language = props.children.props.className.split("-")[1]

    return (
      <ThemeWrappedSyntaxHighlighter
        language={language}
        code={String(props.children.props.children)}
      />
    )
  },
  table(props) {
    return (
      <table>
        {props.children}
      </table>
    )
  }
}
export default markdownComponents
