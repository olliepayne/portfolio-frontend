import "@/app/app.css"
import TopNavigationBar from "@/app/_components/TopNavigationBar"
import Footer from "@/app/_components/Footer"
import { GoogleTagManager } from "@next/third-parties/google"
import Body from "@/app/_components/Body"

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
      <Body>
        <TopNavigationBar />
        {children}
        <Footer />
      </Body>
    </html>
  )
}
