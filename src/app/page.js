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


export default function Home() {


  return ( 
    <>
    <Nav />
    <Wbutton />
    <main className={styles.main}>
    <Header />
    <NoSSR3 />
    </main>
    <Services />
    <Acceso />
    <NoSSR2 />
    <NoSSR />
    <Footer />
    </>
  )

}

