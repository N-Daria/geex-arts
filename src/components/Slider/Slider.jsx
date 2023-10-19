import styles from "./Slider.module.scss";
import React, { useContext, useEffect } from "react";
import { VideoContext } from "../../store/store";

export default function Slider({ videos }) {
  const { videoContext, setVideoContext } = useContext(VideoContext);
  const [leftImage, setLeftImage] = React.useState(null);
  const [rightImage, setRightImage] = React.useState(null);

  useEffect(() => {
    videos.forEach((list) => {
      list.data.forEach((el, index) => {
        if (el.id === videoContext.id) {
          list.data[index - 1]
            ? setLeftImage(list.data[index - 1])
            : setLeftImage(list.data[list.data.length - 1]);

          list.data[index + 1]
            ? setRightImage(list.data[index + 1])
            : setRightImage(list.data[0]);
        }
      });
    });
  }, [videoContext]);

  function handleSwitchRight() {
    setVideoContext(rightImage);
  }

  function handleSwitcLeft() {
    setVideoContext(leftImage);
  }

  return (
    <section className={styles.sliderBlock}>
      <ul className={styles.sliderBlock}>
        <li className={styles.photoBlock}>
          <img
            src={leftImage?.photo}
            alt={leftImage?.text}
            className={styles.image}
          />
          <p className={styles.text}>{leftImage?.text}</p>
        </li>

        <li className={styles.photoBlock}>
          <img
            src={videoContext?.photo}
            alt={videoContext?.text}
            className={styles.image}
          />
          <p className={styles.text}>{videoContext?.text}</p>
        </li>

        <li className={styles.photoBlock}>
          <img
            src={rightImage?.photo}
            alt={rightImage?.text}
            className={styles.image}
          />
          <p className={styles.text}>{rightImage?.text}</p>
        </li>
      </ul>

      <div className={styles.swipe}>
        <button
          type="button"
          className={styles.leftSwipe}
          onClick={handleSwitcLeft}
        />
        <button
          type="button"
          className={styles.rightSwipe}
          onClick={handleSwitchRight}
        />
      </div>
    </section>
  );
}
