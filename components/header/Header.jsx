import React from "react";
import Image from "next/image";
import Hero from "../../assets/hero2.png";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles["header"]}>
        <Image
          className={styles["sonrisa1"]}
          src={Hero}
          width={1500}
          height={400}
          alt="logo"
        />
        <div className={styles.cta}>
          <a href="#contact" className={styles["btn"]}>
            schedule your appointment
          </a>
          <a href="#portfolio" className={styles["btn-primary"]}>
            Services
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
