import React from "react";

import { AvatarGroup } from "../components/Avatar";

const users = [
  {
    name: "tomi budi",
    picture: "",
  },
  {
    name: "Arlo Syahputra Alam",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "pablo esmeralda ridwan",
    picture: "",
  },
  {
    name: "Bob Smith",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "alice johnson kennedy",
    picture: "",
  },
  {
    name: "Mika Tambayong",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Carl Johnson",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Tom Raider",
    picture: "",
  },
  {
    name: "Felix Martin",
    picture: "",
  },
  {
    name: "Steve Ausnih",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Tomi Budi",
    picture: "",
  },
  {
    name: "Arlo Syahputra",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Pablo Esmeralda",
    picture: "",
  },
  {
    name: "Bob Smith",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Alice Johnson",
    picture: "",
  },
  {
    name: "Mika Tambayong",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Carl Johnson",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
  {
    name: "Tom Raider",
    picture: "",
  },
  {
    name: "Felix Martin",
    picture: "",
  },
  {
    name: "Steve Ausnih",
    picture:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png",
  },
];

const index = () => {
  return (
    <div className="">
      <AvatarGroup users={users} maxLength={14} size="md" />
    </div>
  );
};

export default index;
