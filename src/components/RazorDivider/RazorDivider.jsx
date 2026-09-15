import styles from "./RazorDivider.module.css";

/**
 * Divisor con efecto de haz de luz dorada entre secciones.
 */
export default function RazorDivider() {
  return <div className={styles.goldenGlow} aria-hidden="true" />;
}