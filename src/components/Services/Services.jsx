import styles from "./Services.module.css";
import { services } from "../../data/content";

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Servicios</p>
          <h2 className={styles.heading}>Lista de precios</h2>
          <p className={styles.subheading}>
            Precios en pesos uruguayos. Cualquier consulta o combinación de
            servicios, escribime directo por WhatsApp.
          </p>
        </div>

        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service.name} className={styles.item}>
              <div className={styles.itemMain}>
                <h3 className={styles.itemName}>{service.name}</h3>
                <span className={styles.leader} aria-hidden="true" />
                <span className={styles.itemPrice}>${service.price}</span>
              </div>
              <div className={styles.itemMeta}>
                <p className={styles.itemDescription}>{service.description}</p>
                <span className={styles.itemDuration}>{service.duration}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
