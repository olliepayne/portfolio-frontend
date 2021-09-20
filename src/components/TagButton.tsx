/** @jsx jsx */
import { jsx, Button } from "theme-ui"

interface TagButtonProps {
  text: string
  handle: () => void
}
const TagButton = ({ text, handle }: TagButtonProps) => {
  return (
    <Button variant="tag" onClick={handle}>
      {text}
    </Button>
  )
}

export default TagButton
