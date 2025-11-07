import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'A modern Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 shadow-md bg-white">
          <h1 className="text-xl font-bold">My Next App</h1>
        </header>

        <main className="min-h-screen p-6 bg-gray-50">{children}</main>

        <footer className="p-4 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} My Next App. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
