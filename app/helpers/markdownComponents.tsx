import { Components } from "react-markdown"
import Heading from "@/app/_components/Heading"

const markdownComponents: Partial<Components> = {
  h2(props) {
    const { children } = props
    return (
      <Heading level="h2" className="mt-8">
        {children}
      </Heading>
    )
  },
  h3(props) {
    const { children } = props
    return (
      <Heading level="h3" className="mt-4">
        {children}
      </Heading>
    )
  },
  h4(props) {
    const { children } = props
    return (
      <Heading level="h4" className="mt-4">
        {children}
      </Heading>
    )
  },
  h5(props) {
    const { children } = props
    return (
      <Heading level="h5" className="mt-4">
        {children}
      </Heading>
    )
  },
  p(props) {
    const { children } = props
    return <p className="mt-4">{children}</p>
  },
  ul(props) {
    const { children } = props
    return <ul className="list-disc pl-8 mt-4">{children}</ul>
  },
  ol(props) {
    const { children } = props
    return <ol className="list-decimal pl-8 mt-4">{children}</ol>
  }
}
export default markdownComponents
