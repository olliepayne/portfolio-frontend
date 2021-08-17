/** @jsx jsx */
import { jsx } from "theme-ui"
import ToggleColorMode from "./ToggleColorMode"

const Header = () => {
  return (
    <header>
      <ToggleColorMode />
    </header>
  )
}

export default Header