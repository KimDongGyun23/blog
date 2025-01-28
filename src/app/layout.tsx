import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'

import { SideNavigation } from './(home)/_components/SideNavigation'

import '@/styles/index.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex-column min-h-svh bg-black-100">
          <header>
            <h1 className="bg-white px-8 py-8 font-jalnan text-4xl text-black-600">
              <Link href="/">기로케</Link>
            </h1>
          </header>

          <div className="grid grow grid-cols-6 gap-8 overflow-hidden p-8">
            <SideNavigation />
            <div className="col-span-4 overflow-x-hidden rounded-xl bg-white p-4 drop-shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
