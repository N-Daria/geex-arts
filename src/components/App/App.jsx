import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import { videos, user } from "./mockData";
import { VideoContext } from "../../store/store";
import React from "react";

export default function App() {
  const [videoContext, setVideoContext] = React.useState(null);

  return (
    <VideoContext.Provider value={{ videoContext, setVideoContext }}>
      <div>
        <Sidebar user={user} />
        <Content data={videos} />
      </div>
    </VideoContext.Provider>
  );
}
