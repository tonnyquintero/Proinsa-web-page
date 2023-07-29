import dynamic from 'next/dynamic'
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
const NoSSR = dynamic(() => import('../../components/contact/Contact'), { ssr: false })
const NoSSR2 = dynamic(() => import('../../components/blog/Blog'), { ssr: false })

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
    <About />
    </main>
    <Services />
    <NoSSR2 />
    <NoSSR />
    <Footer />
    </>
  )

}

