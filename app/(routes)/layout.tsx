import "@/app/globals.css"
import Navbar from "@/app/_components/Navbar"
import Footer from "@/app/_components/Footer"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
