import React from 'react'
import Image from 'next/image';
import HeaderSocials from './HeaderSocials';
import Logo from '../../assets/logo en blanco.png';
import styles from '../../styles/header.module.css';


const Header = () => {
  return (
    <>
    <HeaderSocials />
    
      <div className={styles['header']}>
        <h1 className={styles['titulo']}>Bienvenidos a</h1>
        <Image src={Logo} width={400} height={200} alt='logo' />
        <div className={styles.cta}>
        <a href='#contact' className={styles['btn']}>Pide tu Cita</a>
        <a href='#portfolio' className={styles['btn-primary']}>Servicios</a>
    </div>
        
        </div>
        
    </>
  )
}

export default Header
