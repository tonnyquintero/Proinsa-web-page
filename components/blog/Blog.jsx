'use client'
import React from 'react'
import styles from '../../styles/blog.module.css';
import Image from 'next/image';
import importancia from '../../assets/post n1.png';
import deporte from '../../assets/post n2.png';



// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: deporte,
    title: 'Salud Bucodental y rendimiento deportivo',
    review: 'Querida comunidad, sean bienvenidos(as) a nuestro espacio informativo, el blog recomendado por nuestros profesionales, a lo largo de este trayecto que apenas empieza traeremos a la mesa temas relacionados a la salud bucodental y algo más. Siendo difusores de la actividad física para la salud nuestro tópico trata sobre la salud bucodental y el rendimiento deportivo...',
    link: 'https://proinsa-tech.blogspot.com/2023/08/salud-bucodental-y-rendimiento-deportivo.html'
  },
  {
    image: importancia,
    title: 'La importancia de un Blog en una empresa',
    review: 'Con la llegada de los Blogs, la producción de la información dejo de ser exclusiva de los grandes medios y llego al alcance de cualquier persona o empresa, esto generó la aparición de micro-medios donde las empresas y las personas producen contenido dirigido a temas tan específicos que los medios masivos no tienen la capacidad de competir. ...',
    link: 'https://proinsa-tech.blogspot.com/2023/07/la-importancia-de-un-blog-en-una-empresa.html'
  },
  
  
]

const Blog = () => {
  return (
    <section id='testimonials'>
      <h5 className={styles['h5']}>Últimas Actualizaciones</h5>
      <h2 className={styles['h2']}>Blog</h2>

      <Swiper className={styles['testimonial_container']}
        modules={[ Navigation, Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        {
          data.map(({image, title, review, link}, index) => {
            return (
              <SwiperSlide key={index} className={styles['testimonial']}>
                <div className={styles["client_avatar"]}>
                  <Image src={image} alt={title} />
                </div>
                <h5 className={styles['client_name']}>{title}</h5>
                  <small className={styles['client_review']}>
                    {review}
                  </small>
                  <a href={link} target="_blank" rel='noreferrer' className={styles['btn_blog']}>Visitar</a>
              </SwiperSlide>
            )
          } )
        }

      </Swiper>

    </section>
  )
}

export default Blog;