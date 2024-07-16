import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import Sidebar from '@/components/Sidebar/Sidebar'
import '@/sass/main.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sensors AI',
  description:
    'App web para monitorizar sensores de temperatura y generar reportes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={comfortaa.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
