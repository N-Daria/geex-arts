import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import { videos, user } from "./mockData";

export default function App() {
  return (
    <div>
      <Sidebar user={user} />
      <Content data={videos} />
    </div>
  );
}
