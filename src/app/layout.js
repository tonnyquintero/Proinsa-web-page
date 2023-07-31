import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proinsa Clínica Odontológica',
  description: 'Clínica Odontológica ubicada en San Isidro, Medellin Colombia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Proinsa Clínica Odontológica</title>
        <meta name="description" content="Clínica Odontológica ubicada en San Isidro, medellin Colombia" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
