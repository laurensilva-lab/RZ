import styles from "./Hero.module.css";
import logo from "../../assets/logo.png";
import fondoWeb from "../../assets/img/fondo web.jpg"; // Importamos el fondo
import { barbershop } from "../../data/content";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Imagen de fondo difuminada */}
      <div 
        className={styles.bgImage} 
        style={{ backgroundImage: `url(${fondoWeb})` }} 
      />
      
      {/* Capa oscura superpuesta para mejorar la legibilidad del texto */}
      <div className={styles.overlay} />

      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Completamos la etiqueta del logo */}
        <img src={logo} alt={barbershop.name} className={styles.logo} />

        <p className={styles.eyebrow}>RAIZON</p>

        <h1 className={styles.title}>{barbershop.name}</h1>

        <p className={styles.tagline}>{barbershop.tagline}</p>

        <p className={styles.description}>
          Un solo barbero, un solo sillón. Cada corte se hace con el tiempo
          que necesita, sin apuro y sin turnos encimados.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primaryBtn}
            href={`https://wa.me/${barbershop.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
          </a>
          <a className={styles.secondaryBtn} href="#servicios">
            Ver servicios
          </a>
        </div>
      </div>

      <a href="#servicios" className={styles.scrollHint} aria-label="Bajar a la siguiente sección">
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
