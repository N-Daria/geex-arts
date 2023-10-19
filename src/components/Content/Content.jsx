import Navigation from "../Navigation/Navigation";
import styles from "./Content.module.scss";

export default function Content() {
  return (
    <section className={styles.content}>
      <header>
        <h1>
          <a>Academy</a>
        </h1>

        <Navigation />
      </header>
    </section>
  );
}
