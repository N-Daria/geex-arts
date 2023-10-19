import styles from "./App.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content />
    </div>
  );
}
