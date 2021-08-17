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
        position: "absolute",
        top: "2%",
        right: "2%",
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
          color: colorMode === "light" ? "themeBlack" : "white"
        }}
        as="p"
        variant="text.light"
      >
        {colorMode === "light" ? "Light" : "Dark"}
      </Text>
    </div>
  )
}

export default ToggleColorMode