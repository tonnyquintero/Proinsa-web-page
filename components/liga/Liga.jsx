import React from 'react'
import Image from 'next/image';
import LigaImage from '../../assets/liga.png';
import styles from '../../styles/header.module.css';
//import Invitacion from '../../public/requisitos.pdf';
import Link from 'next/link';


const Liga = () => {
  return (
    <div className={styles['acceso']}>
        <Image  src={LigaImage} width={1410} height={400} alt='liga de usuarios' />
        <div className={styles['flexi']}>
        <h4 className={styles['hcuatro']}>Consulta nuestros requisitos para la postulación ➡️ </h4>
        <Link href='/requisitos.pdf' download='/requisitos.pdf' target='blank' className={styles['btnDownload']}>Descargalo Aqui</Link>
        </div>    
    </div>
  )
}

export default Liga