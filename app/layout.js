import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Cassandra Curcio- Let's Connect`,
  description: 'This is my personal website, primarily including my software development portfolio and links to my communication accounts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
