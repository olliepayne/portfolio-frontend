/** @jsx jsx */
import { jsx } from "theme-ui"
import { theme } from "../../gatsby-plugin-theme-ui/index"
import * as React from "react"
import { navigate } from "gatsby"

const ContactButton = () => {
  return (
    <button
      sx={theme.buttons.contact}
      onClick={() => navigate("/contact")}
    >
      Contact
    </button>
  )
}

export default ContactButton