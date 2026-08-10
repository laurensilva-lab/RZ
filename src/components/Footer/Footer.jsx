import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { barbershop, navLinks } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const instagramHandle = barbershop.instagram.replace("@", "");
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

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

        <div className={styles.social} aria-label="Redes sociales">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de RZ Barbería"
            className={styles.socialLink}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            <span>{barbershop.instagram}</span>
          </a>
          <a
            href={`https://wa.me/${barbershop.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de RZ Barbería"
            className={styles.socialLink}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.24c-.24.68-1.4 1.3-1.94 1.36-.5.06-1.13.09-1.83-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.19-4.98-4.39-.15-.2-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.81 2.01.88 2.16.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <p className={styles.copyright}>
          © {year} {barbershop.name}
        </p>
      </div>
    </footer>
  );
}
