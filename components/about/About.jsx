import styles from '../../styles/about.module.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import React from 'react'

const About = () => {
  return (
        <div>
          <h2 className={styles['titulin']}>Acerca de Nosotros</h2>
          <div className={styles.about_content}>
        <div className={styles.about_cards}>
          <article className={styles.about_card}>
            <FaAward className={styles.about_icon}/>
            <h5>Experiencia</h5>
            <small>+ 30 años</small>
          </article>
          <article className={styles.about_card}>
            <FiUsers className={styles.about_icon}/>
            <h5>Clientes</h5>
            <small>+ 3.000</small>
          </article>
          <article className={styles.about_card}>
            <VscFolderLibrary className={styles.about_icon}/>
            <h5 >Empresas</h5>
            <small >+ 300</small>
          </article>
        </div>
        <p>
          Somos una Clínica
        </p>
        <a href='#contact' className={styles['about_button']}>Hablemos</a>
      </div>
      
        </div>
  )
}

export default About