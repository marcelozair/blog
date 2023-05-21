import './globals.css'
import NavBar from './components/layout/NavBar/NavBar'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'DiTalks',
  description: 'This is the app to pulic post about programing, just like personal project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
