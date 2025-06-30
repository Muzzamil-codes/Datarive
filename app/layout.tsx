import type React from "react"
import Head from "next/head"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Datarive",
  description: "Empowering businesses with cutting-edge AI solutions to drive innovation, efficiency, and growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
