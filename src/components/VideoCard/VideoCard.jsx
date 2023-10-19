import styles from "./VideoCard.module.scss";

export default function VideoCard({ text, photo, earn }) {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.buttonBlock}>
        <div className={styles.profit}>
          <p className={styles.profitText}>{earn}</p>
        </div>
        <button type="button" className={styles.learn} />
      </div>

      <img src={photo} alt={text} className={styles.img} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
