import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ['400', '700'] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Arwin | Developer',
  description: 'A dreamer in search of Infinity. Exploring languages, 3D graphics, and AI.',
  icons: {
    icon: [
      {
        url: '/image.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased" style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
