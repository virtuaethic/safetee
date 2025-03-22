import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SAFETEE - Historie",
  description: "Die SAFETEE GmbH blickt auf eine lange, erfolgreiche Unternehmensgeschichte zurück.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'