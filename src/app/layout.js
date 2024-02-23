import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <title>Proinsa Clínica Odontológica</title>
        <meta name="description" content="Clínica Odontológica ubicada en San Isidro, Aranjuez, medellin, Colombia" />
        <meta name="facebook-domain-verification" content="n56h19h4kooawxa1w749rcvl3gg0em" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
