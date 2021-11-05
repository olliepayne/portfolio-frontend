/** @jsx jsx */
import { jsx } from "theme-ui"

import NavLink from "components/Header/NavLink"

import { ILink } from "helpers/myTypes"

interface DesktopNavProps {
  links: ILink[]
}
const DesktopNav = ({ links }: DesktopNavProps) => {
  return (
    <nav
      sx={{
        ml: 4
      }}
    >
      <ul
        sx={{
          p: 0,
          display: "flex",
          listStyle: "none",
          li: {
            mr: 4
          }
        }}
      >
        {links.map(({ url, text }, index) => (
          <li key={`DesktopNav:${index}`}>
            <NavLink to={url} text={text} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav