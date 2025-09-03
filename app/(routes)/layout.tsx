import "@/app/app.css"
import Navbar from "@/app/_components/Navbar"
import Footer from "@/app/_components/Footer"
import { GoogleTagManager } from "@next/third-parties/google"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" ? (
        <GoogleTagManager gtmId="GTM-ML4DTJNK" />
      ) : null}
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
