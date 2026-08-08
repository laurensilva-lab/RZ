import styles from "./Gallery.module.css";
import { gallery } from "../../data/content";

export default function Gallery() {
  return (
    <section id="galeria" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Galería</p>
          <h2 className={styles.heading}>Diplomas y Trabajos recientes</h2>
        </div>

        <ul className={styles.grid}>
          {gallery.map((item, index) => (
            <li key={item.label || index} className={styles.cell}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span>{item.label}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}