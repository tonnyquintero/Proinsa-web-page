"use client";
import React from "react";
import styles from "../../styles/blog.module.css";
import Image from "next/image";
import importancia from "../../assets/random3.jpg";
import embarazo from "../../assets/random1.jpg";
import deporte from "../../assets/random2.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: embarazo,
    title: "– Sarah Mitchell",
    review:
      "I hired the Salazar Brothers to paint the interior of my business and I couldn’t be happier. The team was efficient, neat, and very respectful of the space. The finish is flawless and completely refreshed the place. Excellent service from start to finish...",
    link: "https://proinsa-tech.blogspot.com/2023/09/cuidado-bucal-durante-el-embarazo.html",
  },
  {
    image: importancia,
    title: "– Emily Johnson",
    review:
      "The team from Salazar Brothers arrived right on time after a big snowstorm and cleared my driveway and sidewalks perfectly. They were professional, careful, and very fast. You can really tell they care about doing a great job. I will definitely hire them again whenever I need snow removal...",
    link: "https://proinsa-tech.blogspot.com/2023/08/salud-bucodental-y-rendimiento-deportivo.html",
  },
  {
    image: deporte,
    title: "– Michael Anderson",
    review:
      "I’m thrilled with the carpentry work they did at my home. From the very beginning, they showed incredible attention to detail and offered custom, high-quality solutions. My new deck looks absolutely amazing, just the way I dreamed it. Highly recommend them...",
    link: "https://proinsa-tech.blogspot.com/2023/07/la-importancia-de-un-blog-en-una-empresa.html",
  },
];

const Blog = () => {
  return (
    <section id="testimonials">
      <h5 className={styles["h5"]}>Our reviews</h5>
      <h2 className={styles["h2"]}>Testimonials</h2>

      <Swiper
        className={styles["testimonial_container"]}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ image, title, review, link }, index) => {
          return (
            <SwiperSlide key={index} className={styles["testimonial"]}>
              <div className={styles["client_avatar"]}>
                <Image src={image} alt={title} />
              </div>
              <h5 className={styles["client_name"]}>{title}</h5>
              <small className={styles["client_review"]}>{review}</small>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles["btn_blog"]}
              >
                Visit
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
