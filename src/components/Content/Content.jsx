import styles from "./Content.module.scss";
import Navigation from "../Navigation/Navigation";
import VideoList from "../VideoList/VideoList";

import { useContext } from "react";
import { VideoContext } from "../../store/store";
import Slider from "../Slider/Slider";

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
        <Slider />
      ) : (
        data?.map((el) => {
          return <VideoList {...el} key={el.id} />;
        })
      )}
    </main>
  );
}
