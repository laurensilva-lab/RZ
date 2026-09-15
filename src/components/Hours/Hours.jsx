import styles from "./Hours.module.css";
import { barbershop, hours } from "../../data/content";

export default function Hours() {
  return (
    <section id="horarios" className={styles.hours}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">Horarios</p>
          <h2 className={styles.heading}>Cuándo encontrarme</h2>

          <ul className={styles.list}>
            {hours.map((row) => (
              <li key={row.day} className={styles.row}>
                <span>{row.day}</span>
                <span className={styles.time}>{row.time}</span>
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            
          </p>
        </div>

        <div>
          <p className="eyebrow">Ubicación</p>
          <h2 className={styles.heading}>Dónde estoy</h2>
          <p className={styles.address}>{barbershop.address}</p>

          <a
            className={styles.mapLink}
            href={barbershop.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps →
          </a>

          {/* Mapa interactivo integrado */}
          <div className={styles.mapFrameWrap}>
            <iframe
              title="Ubicación de la barbería"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280!2d${barbershop.lng}!3d${barbershop.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2s!4v1`}
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "var(--radius-md)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}