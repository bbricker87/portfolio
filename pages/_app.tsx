import type { AppProps } from 'next/app'
import { Mina } from '@next/font/google'
import '../styles/globals.css'

const mina = Mina({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mina'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mina.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
