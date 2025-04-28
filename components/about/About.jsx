"use client";
import React from "react";
import styles from "../../styles/about.module.css";
import { FaAward } from "react-icons/fa";
import { LiaGrinBeamSolid } from "react-icons/lia";
import { FiThumbsUp } from "react-icons/fi";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const About = () => {
  return (
    <div>
      <h2 className={styles["titulin"]}>About us</h2>
      <div className={styles.about_content}>
        <div className={styles.about_cards}>
          <article className={styles.about_card}>
            <FaAward className={styles.about_icon} />
            <h5>Experience</h5>
            <div className={styles["animated"]}>
              <small>+</small>
              <small>
                <Number n={20} />
                Years
              </small>
            </div>
          </article>
          <article className={styles.about_card}>
            <LiaGrinBeamSolid className={styles.about_icon} />
            <h5>Clients Happy</h5>
            <div className={styles["animated"]}>
              <small>+</small>
              <small>
                <Number n={500} />
              </small>
            </div>
          </article>
          <article className={styles.about_card}>
            <FiThumbsUp className={styles.about_icon} />
            <h5>Quality</h5>
            <div className={styles["animated"]}>
              <small>
                <Number n={100} />
              </small>
              <small>%</small>
            </div>
          </article>
        </div>
        <p>
          At SBS Salazar Brothers, we are committed to delivering exceptional
          craftsmanship and reliable services across a wide range of home and
          commercial improvement needs. With years of experience in the
          industry, we specialize in carpentry, painting, plumbing, pressure
          washing, snow removal, and much more. Our mission is to make your
          spaces more functional, beautiful, and comfortable—whether it’s a
          small repair or a large-scale renovation. We take pride in our
          attention to detail, punctuality, and dedication to customer
          satisfaction.
        </p>
        <div className={styles["thebtn"]}>
          <a href="#contact" className={styles["about_button"]}>
            Hablemos
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
