import styles from "../../src/app/page.module.css";
import Image from "next/image";
import Hero from "../../assets/footer.png";

const Nav = () => {
  return (
    <>
      <div className={styles["headerNav"]}>
        <Image
          className={styles["sonrisa1"]}
          src={Hero}
          width={384}
          height={165}
          alt="logo"
        />
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.google.com/maps/place/Proinsa+San+Isidro/@6.2882591,-75.5627067,15z/data=!4m6!3m5!1s0x8e44292f6403a685:0x2835864fd80e665c!8m2!3d6.2882591!4d-75.5627067!16s%2Fg%2F11fkbyx8tn?entry=ttu"
          className={styles.card}
          target="blank"
        >
          <h2>
            Location<span>-&gt;</span>
          </h2>
          <p>Finding us quickly is easier than you think</p>
        </a>

        <a href="#portfolio" className={styles.card}>
          <h2>
            Services <span>-&gt;</span>
          </h2>
          <p>
            Get to know our extensive catalog of services and choose the one you
            prefer.
          </p>
        </a>

        <a href="#testimonials" className={styles.card}>
          <h2>
            Testimonials <span>-&gt;</span>
          </h2>
          <p>This is the review of people who have taken our services</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            We are attentive to whatever you need, do not hesitate to contact
            us.
          </p>
        </a>
      </div>
    </>
  );
};

export default Nav;
