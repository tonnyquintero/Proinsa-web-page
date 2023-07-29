import styles from '../../src/app/page.module.css';

const Nav = () => {

  
    return (
        
          <div className={styles.grid}>
            <a
              href='https://www.google.com/maps/place/Proinsa+San+Isidro/@6.2882591,-75.5627067,15z/data=!4m6!3m5!1s0x8e44292f6403a685:0x2835864fd80e665c!8m2!3d6.2882591!4d-75.5627067!16s%2Fg%2F11fkbyx8tn?entry=ttu'
              className={styles.card}
              target='blank'

            >
              <h2>
                Ubicación<span>-&gt;</span>
              </h2>
              <p>Encuentranos rápidamente es más fácil de lo que crees</p>
            </a>
    
            <a
              href='#portfolio'
              className={styles.card}

            >
              <h2>
                Servicios <span>-&gt;</span>
              </h2>
              <p>Conoce nuestro amplio catalogo de servicios y elige el de tu preferencia</p>
            </a>
    
            <a
              href='#testimonials'
              className={styles.card}

            >
              <h2>
                Blog <span>-&gt;</span>
              </h2>
              <p>Un espacio informativo para aquellos que se interesan en lo que hacemos.</p>
            </a>
    
            <a
              href='#contact'
              className={styles.card}

            >
              <h2>
                Contacto <span>-&gt;</span>
              </h2>
              <p>
                Estamos atentos a lo que necesites, no dudes en contactarnos
              </p>
            </a>
          </div>

  )
  }
  
  export default Nav;