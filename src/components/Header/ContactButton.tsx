import { Button } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"

const ContactButton = () => {
  return (
    <Button
      variant="contact"
      onClick={() => navigate("/contact")}
    >
      Contact
    </Button>
  )
}

export default ContactButton