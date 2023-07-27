import styles from '../../src/app/page.module.css';

const Nav = () => {

  
    return (
        
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Ubicación<span>-&gt;</span>
              </h2>
              <p>Encuentranos rápidamente es más fácil de lo que crees</p>
            </a>
    
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Servicios <span>-&gt;</span>
              </h2>
              <p>Conoce nuestro amplio catalogo de servicios y elige el de tu preferencia</p>
            </a>
    
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Blog <span>-&gt;</span>
              </h2>
              <p>Un espacio informativo para aquellos que se interesan en lo que hacemos.</p>
            </a>
    
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
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