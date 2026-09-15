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

          <div className={styles.mapFrameWrap}>
            <iframe
              title="Ubicación de la barbería"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13098.508215904085!2d-55.0741272!3d-34.8404285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95750fc7d26bb4c9%3A0xb36b582ee5962372!2sOcean%20Park%2C%20Maldonado%20Department!5e0!3m2!1sen!2suy!4v1700000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
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