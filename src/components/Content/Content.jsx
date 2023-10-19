import Navigation from "../Navigation/Navigation";
import VideoList from "../VideoList/VideoList";
import styles from "./Content.module.scss";
import { useContext } from "react";
import { VideoContext } from "../../store/store";

export default function Content({ data }) {
  const { videoContext, setVideoContext } = useContext(VideoContext);

  function handleClose() {
    setVideoContext(null);
  }

  return (
    <main
      className={`${videoContext ? styles.showing : styles.content} ${
        styles.main
      } `}
    >
      <header className={styles.headerBlock}>
        <h1 className={styles.header}>
          <a className={styles.link} href="#">
            Academy
          </a>
        </h1>

        {videoContext ? (
          <button type="button" className={styles.skip} onClick={handleClose}>
            skip
          </button>
        ) : (
          <Navigation />
        )}
      </header>

      {videoContext ? (
        <div></div>
      ) : (
        data?.map((el) => {
          return <VideoList {...el} key={el.id} />;
        })
      )}
    </main>
  );
}
