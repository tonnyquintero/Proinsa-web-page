"use client";
import React, { useRef } from "react";
import styles from "../../styles/contact.module.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgrg2c5",
        "template_qasvhyh",
        form.current,
        "7MUNBfaSkOk3ocYd5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className={styles["h2"]}>Contact Us</h2>

      <div className={styles.containor}>
        <div className={styles["contact_options"]}>
          <article className={styles["contact_option"]}>
            <MdOutlineEmail className={styles["contact_option-icon"]} />
            <h4>Email</h4>
            <h5>⬇️⬇️⬇️</h5>
            <a
              className={styles["clasa"]}
              href="mailto:proinsacomunicaciones@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send us a message
            </a>
          </article>

          <article className={styles["contact_option"]}>
            <RiMessengerLine className={styles["contact_option-icon"]} />
            <h4>Messenger</h4>
            <h5>Hugo</h5>
            <a
              className={styles["clasa"]}
              href="https://www.facebook.com/messages/t/105684559251580"
              target="_blank"
              rel="noreferrer"
            >
              Send us a message
            </a>
          </article>

          <article className={styles["contact_option"]}>
            <BsWhatsapp className={styles["contact_option-icon"]} />
            <h4>Whatsapp</h4>
            <h5>+573168772932</h5>
            <a
              className={styles["clasa"]}
              href="https://api.whatsapp.com/send?phone=6174620659"
              target="_blank"
              rel="noreferrer"
            >
              Send us a message
            </a>
          </article>
        </div>
        {/* <form className={styles['form']} ref={form} onSubmit={sendEmail} >
            <input className={styles.input} type="text" name="name" placeholder={t("contact.name")} required />
            <input className={styles.input} type="email" name='email' placeholder={t("contact.email")} required />
            <textarea className={styles.textarea} name="message" placeholder={t("contact.message")} rows="7" required></textarea>
            <button type='submit' className='btn'>{t("contact.send")}</button>
          </form> */}

        <div className={styles.box2}>
          <form ref={form} onSubmit={sendEmail} className={styles.form2}>
            <h2>Send us a message</h2>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="name"
                placeholder="Name and last Name"
                required="required"
              />
              <i></i>
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required="required"
              />
              <i></i>
            </div>
            <textarea
              className={styles.inputBox}
              name="message"
              placeholder="  What service do you need?"
              rows="7"
              required
            ></textarea>
            <button type="submit" className={styles.btnPrimary1}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
