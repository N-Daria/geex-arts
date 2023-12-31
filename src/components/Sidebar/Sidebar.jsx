import styles from "./Sidebar.module.scss";
import { useContext } from "react";
import { VideoContext } from "../../store/store";

export default function Sidebar({ user }) {
  const { videoContext } = useContext(VideoContext);

  return (
    <section className={styles.sidebar}>
      <div className={styles.profileBlock}>
        <button
          type="button"
          className={`${styles.notificationButton} ${
            user?.isNotification ? styles.notificationButtonOn : ""
          } `}
        />
        <img
          src={user?.userAvatar}
          alt="фотография профиля"
          className={styles.avatar}
        />
      </div>

      <label>
        <p className={styles.hidden}>поиск</p>
        <input type="text" placeholder="Search" className={styles.input} />
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

          {user?.newVideosAmount ? (
            <div className={`${styles.ItemBlock} ${styles.ItemBlockWatch}`}>
              {user?.newVideosAmount}
            </div>
          ) : null}
        </li>

        <li className={`${styles.menuItem} ${styles.menuItemCommunity}`}>
          <a className={styles.menuText} href="#">
            Community
          </a>

          {user?.friendsAvatars ? (
            <div className={`${styles.ItemBlock} ${styles.ItemBlockCommunity}`}>
              <img
                src={user?.friendsAvatars[2]}
                alt="аватар друга"
                className={styles.friendAvatar}
              />
              <img
                src={user?.friendsAvatars[1]}
                alt="аватар друга"
                className={styles.friendAvatar}
              />
              <img
                src={user?.friendsAvatars[0]}
                alt="аватар друга"
                className={styles.friendAvatar}
              />
            </div>
          ) : null}
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemtHelp}`}>
          <a className={styles.menuText} href="#">
            Help
          </a>
        </li>
      </ul>

      {videoContext ? (
        <div className={styles.policyBlock}>
          <a href="#" className={styles.policy}>
            Privacy & Policy
          </a>
          <a href="#" className={styles.policy}>
            Terms & Conditions
          </a>
        </div>
      ) : null}
    </section>
  );
}
