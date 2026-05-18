import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: 'OM GOHEL -- 3D Creator',
  description: 'a 3d creator driven by crafting striking and unforgettable projects',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0C0C0C]" suppressHydrationWarning>
      <body className={`${kanit.variable} font-sans antialiased bg-[#0C0C0C] text-[#D7E2EA]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

