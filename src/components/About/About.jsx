import styles from "./About.module.css";
import sobreMiImg from "../../assets/img/sobremir.png";

export default function About() {
  return (
    <section id="sobre-mi" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.photoWrap}>
         <img 
            src={sobreMiImg} 
            alt="Sobre mí" 
            className={styles.photo} 
          />
        </div>
        <div className={styles.text}>
          <p className="eyebrow">Sobre mí</p>
          <h2 className={styles.heading}>Un solo barbero, un solo sillón</h2>
          <p className={styles.paragraph}>
         
          </p>
          <p className={styles.paragraph}>
            Tengo 15 años, 2 años de experiencia cortando el pelo y 3 diplomas en barbería que avalan lo que hago. Creo en el corte bien hecho, con tiempo y atención a cada detalle.
          </p>
          <ul className={styles.stats}>
            <li>
              <span className={styles.statNumber}></span>
              <span className={styles.statLabel}></span>
            </li>
            <li>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>atención personalizada</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
