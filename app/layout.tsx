'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoviesApp',
  description: 'Simple project in Next.js + React.js that uses TMDb API',
}

export default function RootLayout({  children , params }: {  children: React.ReactNode, params: {url: string} }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar pathname={usePathname()}></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
