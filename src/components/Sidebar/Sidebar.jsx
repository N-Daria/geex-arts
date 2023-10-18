import styles from "./Sidebar.module.scss";

// imitate mockData
import userAvatar from "../../assets/images/Ellipse2009.png";
import friend1Avatar from "../../assets/images/Frame427322787.png";
import friend2Avatar from "../../assets/images/Frame427322788.png";
import friend3Avatar from "../../assets/images/Frame427322789.png";
import { mockData } from "../../store/srore";

export default function Sidebar() {
  function inputChange() {
    console.log("search");
  }

  return (
    <section className={styles.sidebar}>
      <div className={styles.profileBlock}>
        <button
          type="button"
          className={`${styles.notificationButton} ${
            mockData.isNotification ? styles.notificationButtonOn : ""
          } `}
        />
        <img
          src={userAvatar}
          alt="фотография профиля"
          className={styles.avatar}
        />
      </div>

      <label>
        <p className={styles.hidden}>поиск</p>
        <input
          type="text"
          onChange={inputChange}
          placeholder="Search"
          className={styles.input}
        />
      </label>

      <p className={styles.header}>main</p>

      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${styles.menuItemHome}`}>
          <a className={styles.menuText} href="#">
            Home
          </a>
        </li>

        <li className={`${styles.menuItem} ${styles.menuItemWatch}`}>
          <a className={styles.menuText} href="#">
            Watch
          </a>

          {mockData.newVideosAmount ? (
            <div className={`${styles.ItemBlock} ${styles.ItemBlockWatch}`}>
              {mockData.newVideosAmount}
            </div>
          ) : null}
        </li>

        <li className={`${styles.menuItem} ${styles.menuItemCommunity}`}>
          <a className={styles.menuText} href="#">
            Community
          </a>
          <div className={`${styles.ItemBlock} ${styles.ItemBlockCommunity}`}>
            <img
              src={friend3Avatar}
              alt="аватар друга"
              className={styles.friendAvatar}
            />
            <img
              src={friend2Avatar}
              alt="аватар друга"
              className={styles.friendAvatar}
            />
            <img
              src={friend1Avatar}
              alt="аватар друга"
              className={styles.friendAvatar}
            />
          </div>
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemtHelp}`}>
          <a className={styles.menuText} href="#">
            Help
          </a>
        </li>
      </ul>
    </section>
  );
}
