import React from "react";
import styles from "../../styles/footer.module.css";
import Image from "next/image";
import logo from "../../assets/footer.png";

import { FiInstagram } from "react-icons/fi";

import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Image src={logo} width={150} height={80} alt="logo" />
      <p>We are located in xxxxxx </p>
      <p>
        Schedule: Monday to Friday 7 am to 7 pm<br></br>Saturday from 7 am to 12
        pm
      </p>

      <ul className={styles["permalinks"]}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>Follow us in our social media accounts</p>
      <div className={styles.footer_socials}>
        <a
          href="https://www.facebook.com/profile.php?id=100094323549257"
          target="blank"
        >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/clinica.proinsa/" target="blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/proinsa-clínica-odontológica/"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className={styles["tonny-div"]}>
        <small className={styles["tonny"]}>
          Developed by Anthony Quintero &copy; all rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
