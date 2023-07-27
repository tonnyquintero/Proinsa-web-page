import React from 'react'
import styles from '../../styles/footer.module.css';


import {FiInstagram} from 'react-icons/fi';

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs';




const Footer = () => {



  return (
    <footer className={styles['footer']}>
      <a href='#' className={styles.footer_logo}>PROINSA &copy;</a>

      <ul className={styles['permalinks']}>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Acerca de Nosotros</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#testimonials'>Blog</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className={styles.footer_socials}>
        <a href='https://www.facebook.com/susmedicosips' target='blank'><BsFacebook /></a>
        <a href='https://www.instagram.com/sus.medicos/' target='blank'><FiInstagram /></a>
        <a href='https://www.linkedin.com/company/sus-m%C3%A9dicos/' target='blank'><BsLinkedin /></a>
      </div>

      <div className={styles['tonny-div']}>
        <small className={styles['tonny']}>Desarrollado por Anthony Quintero &copy; todos los derechos reservados</small>
      </div>

    </footer>
  )
}

export default Footer
