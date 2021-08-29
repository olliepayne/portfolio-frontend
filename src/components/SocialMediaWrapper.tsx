import React from "react"
import { Link } from "gatsby"

interface SocialMediaWrapperProps {
  children: React.ReactNode | React.ReactNode[]
  href: string
}
const SocialMediaWrapper = ({ children, href }: SocialMediaWrapperProps) => {
  return (
    <a href={href} rel="nofollow norefferer noopener" target="_blank">
      {children}
    </a>
  )
}

export default SocialMediaWrapper