import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { bertholdAkzidenz, avantgarde } from './fonts'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAFETEE",
  description: "Safe now. Safe tomorrow.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bertholdAkzidenz.variable} ${avantgarde.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
} 