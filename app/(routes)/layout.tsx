import "@/app/app.css"
import { GoogleTagManager } from "@next/third-parties/google"
import NavigationMenu from "@/app/_components/NavigationMenu"
import Footer from "@/app/_components/Footer"
import ThemeProvider from "@/app/_lib/themes-handler"

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
          <NavigationMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
