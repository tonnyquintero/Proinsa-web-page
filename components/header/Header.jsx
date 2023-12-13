import React from 'react'
import Image from 'next/image';
import Hero from '../../assets/hero.jpg';
import styles from '../../styles/header.module.css';


const Header = () => {
  return (
    <>
    
      <div className={styles['header']}>

        <Image className={styles['sonrisa1']} src={Hero} width={1500} height={400} alt='logo' />
        <div className={styles.cta}>
        <a href='#contact' className={styles['btn']}>Pide tu Cita</a>
        <a href='#portfolio' className={styles['btn-primary']}>Servicios</a>
    </div>
        
        </div>
        
    </>
  )
}

export default Header
