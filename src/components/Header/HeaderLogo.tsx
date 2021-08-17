/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

const HeaderLogo = () => {
  return (
    <div>
      <Heading
        sx={{
          color: "themePink"
        }}
        as="h2"
        variant="styles.h2"
      >
        Ollie Payne
      </Heading>
    </div>
  )
}

export default HeaderLogo