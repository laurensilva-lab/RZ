import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { barbershop, navLinks } from "../../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand} onClick={handleLinkClick}>
          <img src={logo} alt={`Logo de ${barbershop.name}`} className={styles.logo} />
          <span className={styles.brandName}>{barbershop.name}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={styles.cta}
          href={`https://wa.me/${barbershop.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar turno
        </a>

        <button
          className={styles.menuButton}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        aria-label="Navegación móvil"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className={styles.ctaMobile}
          href={`https://wa.me/${barbershop.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Reservar turno
        </a>
      </nav>
    </header>
  );
}
