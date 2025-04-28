import React from "react";
import styles from "../../styles/services.module.css";

import Image from "next/image";
import Store from "../../assets/1.png";
import Rick from "../../assets/4.png";
import Task from "../../assets/2.png";
import Travel from "../../assets/3.png";
import Toscana from "../../assets/5.png";
import Toscana1 from "../../assets/6.png";
import Toscana2 from "../../assets/7.png";
import Toscana3 from "../../assets/8.png";
import Toscana4 from "../../assets/9.png";
import Toscana5 from "../../assets/10.png";
import Toscana6 from "../../assets/11.png";
import Toscana7 from "../../assets/12.png";
import Toscana8 from "../../assets/13.png";
import Toscana9 from "../../assets/14.png";

const data = [
  {
    id: 2,
    title: "Painting",
    image: Store,
    gitHub: "https://github.com/tonnyquintero/nextstore",
    deploy:
      "Transform your space with a flawless finish. Interior or exterior, we bring color and quality to every stroke",
  },

  {
    id: 3,
    title: "Carpentry",
    image: Task,
    gitHub: "https://github.com/tonnyquintero/Task-Machine",
    deploy:
      "From custom builds to repairs, our expert carpenters craft durable and beautiful woodwork tailored to your needs",
  },

  {
    id: 4,
    title: "Plumbing",
    image: Travel,
    gitHub: "https://github.com/tonnyquintero/tonnys-travel",
    deploy:
      "Reliable plumbing solutions to keep water flowing smoothly—repairs, installations, and everything in between",
  },

  {
    id: 5,
    title: "Power Washing",
    image: Rick,
    gitHub: "https://github.com/tonnyquintero/Rick-and-Morty-Api",
    deploy:
      "Blast away dirt and grime with high-powered cleaning that instantly refreshes your surfaces",
  },
  {
    id: 6,
    title: "Heating and AC",
    image: Toscana,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Stay comfortable year-round with professional heating and cooling system services—repair, install, and maintenance",
  },
  {
    id: 7,
    title: "Snow Removal",
    image: Toscana1,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Fast, efficient snow removal to keep your driveways, sidewalks, and lots clear and safe all winter long",
  },
  {
    id: 8,
    title: "Landscaping",
    image: Toscana2,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Create curb appeal with beautifully maintained lawns, gardens, and outdoor spaces designed to impress",
  },
  {
    id: 9,
    title: "Asphalt crack filing",
    image: Toscana3,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Protect your pavement with expert crack sealing that prevents further damage and extends its life",
  },
  {
    id: 10,
    title: "Parking lot striping",
    image: Toscana4,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Neat, visible lines for organized and compliant parking lots—professional striping done right",
  },
  {
    id: 11,
    title: "Tile and granite work",
    image: Toscana5,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Elegant tile and granite installations that add lasting beauty and value to kitchens, bathrooms, and more",
  },
  {
    id: 12,
    title: "Carpet Installation",
    image: Toscana6,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Soft, stylish, and seamless—our carpet installation services bring warmth and comfort to your floors",
  },
  {
    id: 13,
    title: "Roofing",
    image: Toscana7,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Durable roofing solutions to protect what matters most. Repairs, replacements, and inspections you can trust",
  },
  {
    id: 14,
    title: "Concrete Work",
    image: Toscana8,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "From sidewalks to foundations, our concrete work is strong, clean, and built to last",
  },
  {
    id: 15,
    title: "Fence Installation",
    image: Toscana9,
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy:
      "Add privacy, security, and charm to your property with professional fence installation tailored to your style",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className={styles["h2"]}>Our Services</h2>

      <div className={styles["ontainer"]}>
        {data.map(({ id, title, image, gitHub, deploy }, index) => {
          return (
            <article key={index} className={styles["item"]}>
              <div className={styles["portfolio_item-image"]}>
                <Image src={image} alt={title} />
              </div>
              <h3 className={styles["h3"]}>{title}</h3>
              <div className={styles["portfolio_item-cta"]}>
                <p className={styles["parrafo"]}>{deploy} </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
