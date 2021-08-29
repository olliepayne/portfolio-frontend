/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import { useColorMode } from "theme-ui"

const ToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div
      sx={{
        py: 1,
        px: 2,
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
          fontSize: 0,
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