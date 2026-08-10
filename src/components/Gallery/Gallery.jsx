import styles from "./Gallery.module.css";
import { cortesGallery, diplomasGallery } from "../../data/content";

function Carousel({ items, direction = "left" }) {
  // Duplicamos la lista para que la animación de scroll sea infinita y sin cortes.
  const track = [...items, ...items];

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.track} ${direction === "right" ? styles.trackReverse : ""}`}
        style={{ "--items": items.length }}
      >
        {track.map((item, index) => (
          <div className={styles.slide} key={`${item.label}-${index}`}>
            <img src={item.image} alt={item.label} className={styles.image} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galeria" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Galería</p>
          <h2 className={styles.heading}>Diplomas y trabajos recientes</h2>
        </div>
      </div>

      <div className={styles.band}>
        <p className={styles.bandLabel}>Cortes</p>
        <Carousel items={cortesGallery} direction="left" />
      </div>

      <div className={`${styles.band} ${styles.bandDiplomas}`}>
        <p className={styles.bandLabel}>Diplomas</p>
        <Carousel items={diplomasGallery} direction="right" />
      </div>
    </section>
  );
}
