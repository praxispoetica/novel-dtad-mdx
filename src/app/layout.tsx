import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import AppNavbar from "@/components/AppNavbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Denying the Amerikan Dream. Diary of a Mid-Century Refugee",
  description: "PraxisPoetica online literary writing process",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <main className="dark text-slate-200 bg-background">
            <AppNavbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
