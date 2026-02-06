import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Frisca Febriyani Kurniawan</p>
        <div className={styles.badge}>
           <span className={styles.dot}></span> Verified Build
        </div>
      </div>
    </footer>
  );
}
