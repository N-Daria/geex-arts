import Navigation from "../Navigation/Navigation";
import VideoList from "../VideoList/VideoList";
import styles from "./Content.module.scss";

export default function Content({ data }) {
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

      {data?.map((el) => {
        return <VideoList {...el} key={el.id} />;
      })}
    </section>
  );
}
