import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Alliance Paints Industries - Premium Quality Paints",
  description:
    "Discover premium quality paints from Alliance Paints Industries. Transform your spaces with our extensive collection of interior and exterior paints.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
