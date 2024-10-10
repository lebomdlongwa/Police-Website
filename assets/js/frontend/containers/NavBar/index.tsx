import React, { useState } from "react";
import * as styled from "./style/index";
import { routes } from "../PoliceApp";
import { HomeIcon } from "../../components/icons/home";
import { Color } from "../../components/colorCodes";
import { PeopleIcon } from "../../components/icons/people";
import { PassportIcon } from "../../components/icons/passport";
import { ClipboardIcon } from "../../components/icons/clipboard";
import { LostItemsIcons } from "../../components/icons/lost_items";
import { MenuIcon } from "../../components/icons/menu";

type SideBarProps = {
  handleExpandMenu: VoidCallBack;
  expandMenu: boolean;
};

const SideBar = (props: SideBarProps) => {
  const { handleExpandMenu, expandMenu } = props;

  return (
    <styled.NavWrapper>
      <styled.NavMenu onClick={handleExpandMenu}>
        <MenuIcon c={Color.white} h={30} w={30} />
      </styled.NavMenu>
      <styled.NavOptions>
        <styled.StyledLink to={routes.home}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <HomeIcon c={Color.white} h={30} w={30} />
            </styled.OptionIcon>
            <styled.ExpandedMenuOption expandMenu={expandMenu}>
              Home
            </styled.ExpandedMenuOption>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.reports_list}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <ClipboardIcon c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
            <styled.ExpandedMenuOption expandMenu={expandMenu}>
              Report List
            </styled.ExpandedMenuOption>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.lost_general_goods}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <LostItemsIcons c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
            <styled.ExpandedMenuOption expandMenu={expandMenu}>
              Lost Goods
            </styled.ExpandedMenuOption>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.missing}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <PeopleIcon c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
            <styled.ExpandedMenuOption expandMenu={expandMenu}>
              Missing & Wanted
            </styled.ExpandedMenuOption>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.lost_id_pp}>
          <styled.OptionsWrapper>
            <styled.OptionIcon>
              <PassportIcon c={Color.white} h={25} w={25} />
            </styled.OptionIcon>
            <styled.ExpandedMenuOption expandMenu={expandMenu}>
              Lost ID & Passport
            </styled.ExpandedMenuOption>
          </styled.OptionsWrapper>
        </styled.StyledLink>
      </styled.NavOptions>
    </styled.NavWrapper>
  );
};

export default SideBar;
