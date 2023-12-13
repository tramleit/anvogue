import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import MenuMobile from '@/components/Modal/MenuMobile'

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anvogue',
  description: 'Multipurpose eCommerce Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={instrument.className}>
        <MenuMobile />
        {children}
      </body>
    </html>
  )
}
