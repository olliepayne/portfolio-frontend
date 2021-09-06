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
        width: ["90%", null, "964px"],
        minHeight: "100vh",
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout