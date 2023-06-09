import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'template',
  description: 'Generated by create next app',
}
const fontNunito = Nunito({
subsets:["latin"]})
export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
