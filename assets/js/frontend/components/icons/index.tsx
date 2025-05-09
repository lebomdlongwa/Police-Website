import React from "react";
import police from "./security-officer.png";
import caseNumber from "./case.png";
import calendar from "./calendar.svg";
import grade from "./grade.png";
import person from "./user.png";
import trash from "./trash.png";
import edit from "./edit.png";
import accused from "./handcuff.png";
import crime from "./crime-scene.png";
import solved from "./puzzle-piece.png";
import roundChat from "./round-chat.png";
import squareChat from "./square-chat.png";
import missing from "./missing.png";
import mails from "./emails.png";
import home from "./home.png";
import list from "./list.png";
import passport from "./passport.png";
import send from "./send.png";
import * as styled from "./styles";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export const Icon = (props: IconProps) => {
  const { name, size, color } = props;

  const iconsObj: { [key: string]: string } = {
    police,
    caseNumber,
    calendar,
    grade,
    person,
    trash,
    edit,
    crime,
    accused,
    solved,
    roundChat,
    squareChat,
    missing,
    mails,
    home,
    list,
    passport,
    send,
  };

  return (
    <styled.Wrapper>
      <styled.IconImage src={iconsObj[name]} size={size} color={color} />
    </styled.Wrapper>
  );
};
