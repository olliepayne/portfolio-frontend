import "@/app/app.css"
import TopNavigationBar from "@/app/_components/TopNavigationBar"
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
        <TopNavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
