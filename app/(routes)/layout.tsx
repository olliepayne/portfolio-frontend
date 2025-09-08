import "@/app/app.css"
import { GoogleTagManager } from "@next/third-parties/google"
import TopNavigationBar from "@/app/_components/TopNavigationBar"
import Footer from "@/app/_components/Footer"
import ThemeProvider from "@/app/lib/custom-next-themes"

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
        <ThemeProvider>
          <TopNavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
