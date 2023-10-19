import styles from "./VideoCard.module.scss";
import { useContext } from "react";
import { VideoContext } from "../../store/store";

export default function VideoCard(props) {
  const { setVideoContext } = useContext(VideoContext);

  function handleClick() {
    setVideoContext(props);
  }

  return (
    <div className={styles.cardBlock} onClick={handleClick}>
      <div className={styles.buttonBlock}>
        <div className={styles.profit}>
          <p className={styles.profitText}>{props.earn}</p>
        </div>
        <button type="button" className={styles.learn} />
      </div>

      <img src={props.photo} alt={props.text} className={styles.img} />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
