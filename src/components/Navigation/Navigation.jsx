import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.current}`}>
          <a className={styles.link} href="#">
            All
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="#">
            Stocks
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="#">
            ETFs
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="#">
            Crypto
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="#">
            NFTs
          </a>
        </li>
      </ul>
    </nav>
  );
}
