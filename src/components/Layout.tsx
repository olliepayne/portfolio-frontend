import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer"

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
}
const Layout = ({
  children
}: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout