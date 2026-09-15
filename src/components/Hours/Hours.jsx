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
            
          </div>
        </div>
      </div>
    </section>
  );
}