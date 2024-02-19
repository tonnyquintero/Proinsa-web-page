import React from 'react'
import styles from '../../styles/footer.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.png'


import {FiInstagram} from 'react-icons/fi';

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';




const Footer = () => {



  return (
    <footer className={styles['footer']}>
      <Image src={logo} width={150} height={80} alt='logo' />
      <p>Estamos ubicados en la carrera 52 N 95 - 91 Aranjuez, San Isidro, Medellín </p>
      <p>Horario: Lunes a Viernes 7 am a 7 pm<br>
      </br>Sábados de 7 am a 12 pm</p>
      

      <ul className={styles['permalinks']}>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Acerca de Nosotros</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#testimonials'>Blog</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>
      <p>Siguenos en nuestras redes sociales</p>
      <div className={styles.footer_socials}>
        <a href='https://www.facebook.com/profile.php?id=100094323549257' target='blank'><BsFacebook /></a>
        <a href='https://www.instagram.com/clinica.proinsa/' target='blank'><FiInstagram /></a>
        <a href='https://www.linkedin.com/company/proinsa-clínica-odontológica/' target='blank'><BsLinkedin /></a>
      </div>

      <div className={styles['tonny-div']}>
        <small className={styles['tonny']}>Desarrollado por Anthony Quintero &copy; todos los derechos reservados</small>
      </div>

    </footer>
  )
}

export default Footer
