import styles from "./Slider.module.scss";
import { useContext } from "react";
import { VideoContext } from "../../store/store";

export default function Slider() {
  const { videoContext, setVideoContext } = useContext(VideoContext);

  return (
    <section className={styles.sliderBlock}>
      <img
        src={videoContext.photo}
        alt={videoContext.text}
        className={styles.mainImage}
      />
    </section>
  );
}
