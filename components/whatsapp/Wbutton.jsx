import React from 'react'
import Image from 'next/image'
import {BsWhatsapp} from 'react-icons/bs'
import boton from '../../assets/botonW.png'
import styles from '../../styles/wbutton.module.css';

const Wbutton = () => {
  return (
    <div className={styles['boton']}>
        <div className={styles['divMessage']}><p>Necesitas Orientación? <br /> Habla con nosotros</p></div>
        <button className={styles['button']}><a  href='https://api.whatsapp.com/send?phone=573168772932' target='blank'><BsWhatsapp size={75} /></a> </button>
    </div>
  )
}

export default Wbutton