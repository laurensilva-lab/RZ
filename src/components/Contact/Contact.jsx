import styles from "./Contact.module.css";
import { barbershop } from "../../data/content";

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Contacto</p>
        <h2 className={styles.heading}>¿Reservamos tu turno?</h2>
        <p className={styles.subheading}>
          Escribime por WhatsApp con el día y horario que te queden mejor y
          te confirmo al toque.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.whatsapp}
            href={`https://wa.me/${barbershop.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <a
            className={styles.instagram}
            href={`https://instagram.com/${barbershop.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {barbershop.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
