import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoList.module.scss";

export default function VideoList({ name, data }) {
  return (
    <section className={styles.videoBlock}>
      <div className={styles.headerBlock}>
        <h3 className={styles.header}>{name}</h3>
        <a className={styles.link} href="#">
          See All
        </a>
      </div>

      <ul className={styles.videoList}>
        {data?.map((el) => {
          return <VideoCard {...el} key={el.id} />;
        })}
      </ul>
    </section>
  );
}
