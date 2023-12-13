import React from 'react'
import Image from 'next/image';
import AccesoImage from '../../assets/acceso.png';
import styles from '../../styles/header.module.css';


const Acceso = () => {
  return (
    <div className={styles['acceso']}>
        <Image  src={AccesoImage} width={1410} height={400} alt='logo' />
    </div>
  )
}

export default Acceso