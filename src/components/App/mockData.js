// imitate data reciving
import photo8 from "../../assets/images/Rectangle1.png";
import photo1 from "../../assets/images/Rectangle2.png";
import photo7 from "../../assets/images/Rectangle3.png";
import photo6 from "../../assets/images/Rectangle4.png";
import photo5 from "../../assets/images/Rectangle5.png";
import photo4 from "../../assets/images/Rectangle6.png";
import photo3 from "../../assets/images/Rectangle7.png";
import photo2 from "../../assets/images/Rectangle8.png";

import userAvatar from "../../assets/images/Ellipse2009.png";
import friend1Avatar from "../../assets/images/Frame427322787.png";
import friend2Avatar from "../../assets/images/Frame427322788.png";
import friend3Avatar from "../../assets/images/Frame427322789.png";

export const videos = [
  {
    id: 1,
    name: "New Playlist",
    data: [
      {
        id: 1,
        text: "Fundamentals of investment",
        photo: photo1,
        earn: "Earn 2T",
      },
      {
        id: 2,
        text: "Fundamentals of investment",
        photo: photo2,
        earn: "Earn 2T",
      },
      {
        id: 3,
        text: "Fundamentals of investment",
        photo: photo3,
        earn: "Earn 2T",
      },
      {
        id: 4,
        text: "Fundamentals of investment",
        photo: photo4,
        earn: "Earn 2T",
      },
    ],
  },
  {
    id: 2,
    name: "Trending",
    data: [
      {
        id: 1,
        text: "Fundamentals of investment",
        photo: photo5,
        earn: "Earn 2T",
      },
      {
        id: 2,
        text: "Fundamentals of investment",
        photo: photo6,
        earn: "Earn 2T",
      },
      {
        id: 3,
        text: "Fundamentals of investment",
        photo: photo7,
        earn: "Earn 2T",
      },
      {
        id: 4,
        text: "Fundamentals of investment",
        photo: photo8,
        earn: "Earn 2T",
      },
    ],
  },
];

export const user = {
  isNotification: true,
  newVideosAmount: 2,
  friendsAvatars: [friend1Avatar, friend2Avatar, friend3Avatar],
  userAvatar: userAvatar,
};
