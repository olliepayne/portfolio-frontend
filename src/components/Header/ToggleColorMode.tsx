/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"

const ToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div
      sx={{
        position: "absolute",
        top: "5%",
        right: "5%",
        borderRadius: ""
      }}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >

    </div>
  )
}

export default ToggleColorMode