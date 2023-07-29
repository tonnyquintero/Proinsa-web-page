import React from 'react'
import Image from 'next/image';
import HeaderSocials from './HeaderSocials';
import Logo from '../../assets/logo en blanco.png';
import cover from '../../assets/coverD.png';
import cover1 from '../../assets/coverD1.png';
import styles from '../../styles/header.module.css';


const Header = () => {
  return (
    <>
    <HeaderSocials />
    
      <div className={styles['header']}>

        <Image src={cover1} width={400} height={250} alt='logo' />
        <Image src={Logo} width={300} height={200} alt='logo' />
        <Image src={cover} width={400} height={250} alt='logo' />
        <div className={styles.cta}>
        <a href='#contact' className={styles['btn']}>Pide tu Cita</a>
        <a href='#portfolio' className={styles['btn-primary']}>Servicios</a>
    </div>
        
        </div>
        
    </>
  )
}

export default Header
