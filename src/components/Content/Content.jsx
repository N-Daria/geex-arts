import Navigation from "../Navigation/Navigation";
import styles from "./Content.module.scss";

export default function Content() {
  return (
    <section className={styles.content}>
      <header className={styles.headerBlock}>
        <h1 className={styles.header}>
          <a className={styles.link} href="#">
            Academy
          </a>
        </h1>

        <Navigation />
      </header>
    </section>
  );
}
