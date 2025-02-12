import React, { useState } from "react";
import * as styled from "./style/index";
import { routes } from "../PoliceApp";
import { HomeIcon } from "../../components/icons/home";
import { Color } from "../../components/colorCodes";
import { PeopleIcon } from "../../components/icons/people";
import { PassportIcon } from "../../components/icons/passport";
import { ClipboardIcon } from "../../components/icons/clipboard";
import { MenuIcon } from "../../components/icons/menu";
import { ChatIcon } from "../../components/icons/chat";
import { MailboxIcon } from "../../components/icons/mailbox";

const SideBar = () => {
  return (
    <styled.NavWrapper>
      <styled.NavMenu>
        <MenuIcon c={Color.white} h={30} w={30} />
      </styled.NavMenu>
      <styled.NavOptions>
        <styled.StyledLink to={routes.home}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <HomeIcon c={Color.white} h={40} w={40} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.reports_list}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <ClipboardIcon c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.missing}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <PeopleIcon color={Color.white} size={25} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.lost_id_pp}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <PassportIcon c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.chat}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <ChatIcon color={Color.white} size={25} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.mail}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <MailboxIcon color={Color.white} size={25} />
            </styled.OptionIcon>
          </styled.OptionsWrapper>
        </styled.StyledLink>
      </styled.NavOptions>
    </styled.NavWrapper>
  );
};

export default SideBar;
