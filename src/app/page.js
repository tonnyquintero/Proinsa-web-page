import dynamic from 'next/dynamic'
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Blog from '../../components/blog/Blog';
const NoSSR = dynamic(() => import('../../components/contact/Contact'), { ssr: false })

import Footer from '../../components/footer/Footer';
import styles from '../app/page.module.css';


export default function Home() {
  return ( 
    <>
   
    <Nav />
    <main className={styles.main}>
    <Header />
    <About />
    </main>
    <Services />
    <Blog />
    <NoSSR />
    <Footer />
    </>
  )

}

