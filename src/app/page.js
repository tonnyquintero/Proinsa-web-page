import dynamic from 'next/dynamic'
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Acceso from '../../components/acceso/Acceso';
import Liga from '../../components/liga/Liga';
import Services from '../../components/services/Services';
const NoSSR = dynamic(() => import('../../components/contact/Contact'), { ssr: false })
const NoSSR2 = dynamic(() => import('../../components/blog/Blog'), { ssr: false })
const NoSSR3 = dynamic(() => import('../../components/about/About'), { ssr: false })

import Wbutton from '../../components/whatsapp/Wbutton';
import Footer from '../../components/footer/Footer';
import styles from '../app/page.module.css';

export const metadata = {
  title: 'Proinsa Clínica Odontológica',
  description: 'Clínica Odontológica ubicada en San Isidro, medellin, Colombia',
}

export default function Home() {


  return ( 
    <>
    <Head>
        <title>Proinsa Clínica Odontológica</title>
        <meta name="description" content="Clínica Odontológica ubicada en San Isidro, medellin, Colombia" />
      </Head>
    <Nav />
    <Wbutton />
    <main className={styles.main}>
    <Header />
    <NoSSR3 />
    </main>
    <Services />
    <Acceso />
    <NoSSR2 />
    <Liga />
    <NoSSR />
    <Footer />
    </>
  )

}

