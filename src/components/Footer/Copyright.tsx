/** @jsx jsx */
import { jsx, Paragraph } from "theme-ui"

const Copyright = () => {
  return (
    <Paragraph as="p" variant="body">
      &copy; {new Date().getFullYear()} Ollie Payne
    </Paragraph>
  )
}

export default Copyright
