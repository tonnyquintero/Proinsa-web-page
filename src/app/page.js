import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Blog from '../../components/blog/Blog';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import styles from '../app/page.module.css';


export default function Home() {
  return ( 
    <>
    <main className={styles.main}>
    <Nav />
    <Header />
    <About />
    </main>
    <Services />
    <Blog />
    <Contact />
    <Footer />
    </>
  )

}

