/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
}
const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout