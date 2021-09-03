/** @jsx jsx */
import { jsx, Text } from "theme-ui"

const Copyright = () => {
  return (
    <Text sx={{ color: "themeBlack" }} as="p" variant="body">
      &copy; {new Date().getFullYear()} Ollie Payne
    </Text>
  )
}

export default Copyright
