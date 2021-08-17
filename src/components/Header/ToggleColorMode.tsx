/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import { useColorMode } from "theme-ui"

const ToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div
      sx={{
        width: "80px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        bg: colorMode === "light" ? "#F0F0F0" : "#2B2B2B",
        cursor: "pointer"
      }}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      <Text
        sx={{
          fontFamily: "heading",
          fontSize: 1,
          fontWeight: "medium",
          lineHeight: "default",
          color: colorMode === "light" ? "themeBlack" : "white"
        }}
        as="p"
      >
        {colorMode === "light" ? "Light" : "Dark"}
      </Text>
    </div>
  )
}

export default ToggleColorMode