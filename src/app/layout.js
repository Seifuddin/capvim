// src/app/layout.jsx
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'My App',
  description: 'This is my Next.js app using App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}