import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { barbershop, navLinks } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand}>
          <img src={logo} alt={`Logo de ${barbershop.name}`} className={styles.logo} />
          <span>{barbershop.name}</span>
        </a>

        <nav aria-label="Navegación del pie de página">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>
          © {year} {barbershop.name}
        </p>
      </div>
    </footer>
  );
}
