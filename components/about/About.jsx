'use client'
import React from 'react'
import styles from '../../styles/about.module.css';
import {FaAward} from 'react-icons/fa';
import {LiaGrinBeamSolid} from 'react-icons/lia';
import {FiThumbsUp} from 'react-icons/fi';
import { useSpring, animated } from '@react-spring/web'


function Number ({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return (
    <animated.div>{number.to((n) => n.toFixed(0)) }</animated.div>
  )
}



const About = () => {
  return (
        <div>
          <h2 className={styles['titulin']}>Acerca de Nosotros</h2>
          <div className={styles.about_content}>
        <div className={styles.about_cards}>
          <article className={styles.about_card}>
            <FaAward className={styles.about_icon}/>
            <h5>Experiencia</h5>
            <div className={styles['animated']}>
            <small>
              +
            </small>
            <small>
              <Number n={30} />
              Años
            </small>
            </div>
          </article>
          <article className={styles.about_card}>
            <LiaGrinBeamSolid className={styles.about_icon}/>
            <h5>Sonrisas</h5>
            <div className={styles['animated']}>
            <small>
              +
            </small>
            <small>
              <Number n={300000} />
            </small>
            </div>
          </article>
          <article className={styles.about_card}>
            <FiThumbsUp className={styles.about_icon}/>
            <h5 >Calidad</h5>
            <div className={styles['animated']}>
            <small>
            <Number n={100} />
            </small>
            <small>
              %
            </small>
            </div>
          </article>
        </div>
        <p>
        Somos una clínica con más de 30 años al servicio de todos y todas, 
        nuestro equipo de profesionales altamente calificados y con amplia experiencia está dedicado a brindar la más alta calidad en servicios odontológicos.
         Nuestra misión es ayudar a nuestros pacientes a lograr una sonrisa saludable, hermosa y duradera, mediante tratamientos personalizados y avanzadas técnicas, 
         siempre adaptándonos a las últimas innovaciones en el campo de la odontología.
        </p>
        <div className={styles['thebtn']}>
        <a href='#contact' className={styles['about_button']}>Hablemos</a>
        </div>
      </div>
      
        </div>
  )
}

export default About