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
              <p>Find in-depth information about Next.js features and API.</p>
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
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
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
              <p>Explore the Next.js 13 playground.</p>
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
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>

  )
  }
  
  export default Nav;