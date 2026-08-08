import styles from "./RazorDivider.module.css";

/**
 * Divisor decorativo entre secciones: una línea dorada con un
 * pequeño ícono de navaja de afeitar, el motivo del logo.
 */
export default function RazorDivider() {
  return (
    <div className={styles.divider} role="presentation" aria-hidden="true">
      <span className={styles.line} />
      <svg
        className={styles.razor}
        viewBox="0 0 64 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20 L34 4 L40 4 L40 10 L14 22 Z"
          fill="currentColor"
        />
        <rect x="40" y="4" width="18" height="7" rx="1.5" fill="currentColor" />
        <circle cx="45" cy="7.5" r="1" fill="var(--black)" />
        <circle cx="53" cy="7.5" r="1" fill="var(--black)" />
      </svg>
      <span className={styles.line} />
    </div>
  );
}
