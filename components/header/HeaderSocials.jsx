import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md';
import {FaBloggerB} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im'
import styles from '../../styles/header.module.css';

const HeaderSocials = () => {
  return (
    <>
      <div className={styles.header_socials}>
        <ul className={styles.social_icons}>
          <li><a className='fa' href='https://www.linkedin.com/company/proinsa-clínica-odontológica/' target='blank'><BsLinkedin size={40} /></a></li>
          <li><a className='fa' href='https://www.instagram.com/clinica.proinsa/' target='blank'><BsInstagram size={40} /></a></li>
          <li><a className='fa' href='https://www.facebook.com/profile.php?id=100094323549257' target='blank'><BsFacebook size={45} /></a></li>
        </ul>
    </div>
    <div className={styles.header_socials2}>
        <ul className={styles.social_icons2}>
          <li><a className='fa' href='https://api.whatsapp.com/send?phone=573172388777' target='blank'><BsWhatsapp size={40} /></a></li>
          <li><a className='fa' href='https://www.google.com/maps/place/Proinsa+San+Isidro/@6.2882591,-75.5627067,15z/data=!4m6!3m5!1s0x8e44292f6403a685:0x2835864fd80e665c!8m2!3d6.2882591!4d-75.5627067!16s%2Fg%2F11fkbyx8tn?entry=ttu' target='blank'><ImLocation size={40} /></a></li>
          <li><a className='fa' href='mailto:proinsacomunicaciones@gmail.com' target='blank'><MdOutlineEmail size={45} /></a></li>
        </ul>
    </div>
    </>
    
  )
}

export default HeaderSocials