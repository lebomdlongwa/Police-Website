import React from "react";
import { routes } from "../../PoliceApp";
import { HomeIcon } from "../../../components/icons/home";
import { Color } from "../../../components/colorCodes";
import { ClipboardIcon } from "../../../components/icons/clipboard";
import { PeopleIcon } from "../../../components/icons/people";
import { PassportIcon } from "../../../components/icons/passport";
import { ChatIcon } from "../../../components/icons/chat";
import { MailboxIcon } from "../../../components/icons/mailbox";

export const FormDefinition = [
  {
    route: "/",
    icon: <HomeIcon color={Color.white} size={40} />,
    text: "Home",
  },
  {
    route: "/police/reportsList",
    icon: <ClipboardIcon color={Color.white} size={25} />,
    text: "Reports",
  },
  {
    route: "/police/missing_list",
    icon: <PeopleIcon color={Color.white} size={25} />,
    text: "Missing People",
  },
  {
    route: "/police/lost_id_pp",
    icon: <PassportIcon color={Color.white} size={25} />,
    text: "Passports and Ids",
  },
  {
    route: "police/chat",
    icon: <ChatIcon color={Color.white} size={25} />,
    text: "Chat Room",
  },
  {
    route: "police/mail",
    icon: <MailboxIcon color={Color.white} size={40} />,
    text: "Mailbox",
  },
];
