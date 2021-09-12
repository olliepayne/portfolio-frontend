/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui"
import { theme } from "gatsby-plugin-theme-ui/index"

interface CodeSnippetProps {
  text: string
}
const CodeSnippet = ({ text }: CodeSnippetProps) => {
  const copyToClipboard = () => {
    if (global) navigator.clipboard.writeText(text)
  }

  return (
    <Box
      sx={{
        width: "70%",
        py: 3,
        px: 4,
        position: "relative",
        bg: "codeSnippet",
        borderRadius: "4px"
      }}
    >
      <Button
        sx={{
          position: "absolute",
          right: "0",
          top: "0"
        }}
        variant="copyToClipboard"
        onClick={copyToClipboard}
      >
        Copy
      </Button>
      <code
        sx={theme.text.code}
      >
        {text}
      </code>
    </Box>
  )
}

export default CodeSnippet
