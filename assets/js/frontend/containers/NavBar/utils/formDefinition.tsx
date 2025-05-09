import React from "react";
import { routes } from "../../PoliceApp";
import { HomeIcon } from "../../../components/icons/home";
import { Color } from "../../../components/colorCodes";
import { ClipboardIcon } from "../../../components/icons/clipboard";
import { PeopleIcon } from "../../../components/icons/people";
import { PassportIcon } from "../../../components/icons/passport";
import { ChatIcon } from "../../../components/icons/chat";
import { MailboxIcon } from "../../../components/icons/mailbox";
import { Icon } from "../../../components/icons";

export const FormDefinition = [
  {
    route: "/",
    icon: <Icon name="home" size={27} />,
    text: "Home",
  },
  {
    route: "/police/reportsList",
    icon: <Icon name="list" size={30} />,
    text: "Reports",
    admin: true,
  },
  {
    route: "/police/missing_list",
    icon: <Icon name="missing" size={27} />,
    text: "Missing People",
  },
  {
    route: "/police/lost_id_pp",
    icon: <Icon name="passport" size={27} />,
    text: "Passports and Ids",
  },
  {
    route: "police/chat",
    icon: <Icon name="roundChat" size={25} />,
    text: "Chat Room",
  },
  {
    route: "police/mail",
    icon: <Icon name="mails" size={29} />,
    text: "Mailbox",
    admin: true,
  },
];
