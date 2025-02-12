import React from "react";
import { Color } from "../../../components/colorCodes";
import { AccusedIcon } from "../../../components/icons/accused";
import { MailboxIcon } from "../../../components/icons/mailbox";
import { PeopleIcon } from "../../../components/icons/people";
import { XIcon } from "../../../components/icons/xIcon";

export const TabsFormDefinition = [
  {
    label: "All Mails",
    icon: <MailboxIcon size={20} color={Color.lightBlack} />,
  },
  {
    label: "Crime Reports",
    icon: <AccusedIcon size={23} color={Color.lightBlack} />,
    type: "crime",
  },
  {
    label: "Missing/Wanted Reports",
    icon: <PeopleIcon size={21} color={Color.lightBlack} />,
    type: "person",
  },
  {
    label: "Rejected Reports",
    icon: <XIcon size={22} color={Color.lightBlack} />,
  },
];
