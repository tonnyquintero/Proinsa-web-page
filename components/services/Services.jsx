import React from 'react';
import styles from '../../styles/services.module.css';

import Image from 'next/image';
import Store from '../../assets/Blanqueamiento.png';
import Rick from '../../assets/odontologia.png';
import Task from '../../assets/urgencias.png';
import Travel from '../../assets/rayosX.png';
import Toscana from '../../assets/cirugia.png';
import Toscana1 from '../../assets/endodoncia.png';
import Toscana2 from '../../assets/odontopediatria.png';
import Toscana3 from '../../assets/ortodoncia.png';
import Toscana4 from '../../assets/periodoncia.png';
import Toscana5 from '../../assets/protesis.png';
import Toscana6 from '../../assets/productos.png';



const data = [
  {
    id: 2,
    title: 'Blanqueamiento Dental',
    image: Store,
    gitHub: 'https://github.com/tonnyquintero/nextstore',
    deploy: '/portafolio'
  },

  {
    id: 3,
    title: 'Urgencias Odontológicas',
    image: Task,
    gitHub: 'https://github.com/tonnyquintero/Task-Machine',
    deploy: '/ficha1'
  },

  {
    id: 4,
    title: 'Rayos X Periapicales',
    image: Travel,
    gitHub: 'https://github.com/tonnyquintero/tonnys-travel',
    deploy: '/conductor'
  },

  {
    id: 5,
    title: 'Odontología General y Estética',
    image: Rick,
    gitHub: 'https://github.com/tonnyquintero/Rick-and-Morty-Api',
    deploy: '/alturas'
  },
  {
    id: 6,
    title: 'Cirugía Oral',
    image: Toscana,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  {
    id: 7,
    title: 'Endodoncia',
    image: Toscana1,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  {
    id: 8,
    title: 'Ortopedia y Odontopediatría',
    image: Toscana2,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },{
    id: 9,
    title: 'Ortodoncia',
    image: Toscana3,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  {
    id: 10,
    title: 'Periodoncia',
    image: Toscana4,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  {
    id: 11,
    title: 'Protesis Removible y Fija',
    image: Toscana5,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  {
    id: 12,
    title: 'Productos de Higiene Oral',
    image: Toscana6,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
]


const Portfolio = () => {




  return (
    <section id='portfolio'>

      <h2 className={styles['h2']}>Nuestros Servicios</h2>

      <div className={styles["ontainer"]}>

        {
          data.map(({id, title, image, gitHub, deploy}, index) => {
            return (
              <article key={index} className={styles['item']}>
                <div className={styles["portfolio_item-image"]}>
                  <Image src={image} alt={title} />
                </div>
              <h3 className={styles['h3']}>{title}</h3>
              <div className={styles["portfolio_item-cta"]}>
                <a href={deploy} className={styles['btn']} >Conoce más</a>
              </div>
              </article>
            )
          })
        }  

      </div>
    </section>
  )
}

export default Portfolio
