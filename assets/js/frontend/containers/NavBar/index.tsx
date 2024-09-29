import React, { useState } from "react";
import * as styled from "./style/index";
import { Link } from "react-router-dom";
import { routes } from "../PoliceApp";

const Navbar = () => {
  return (
    <styled.NavWrapper>
      <styled.NavOptions>
        <styled.StyledLink to={routes.home}>
          <styled.OptionsWrapper>
            <styled.Option>HOME</styled.Option>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.reports_list}>
          <styled.OptionsWrapper>
            <styled.Option>REPORT LIST</styled.Option>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.lost_general_goods}>
          <styled.OptionsWrapper>
            <styled.Option>LOST GENERAL GOODS</styled.Option>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.missing}>
          <styled.OptionsWrapper>
            <styled.Option>MISSING & WANTED</styled.Option>
          </styled.OptionsWrapper>
        </styled.StyledLink>
        <styled.StyledLink to={routes.lost_id_pp}>
          <styled.OptionsWrapper>
            <styled.Option>LOST ID & PASSPORTS</styled.Option>
          </styled.OptionsWrapper>
        </styled.StyledLink>
      </styled.NavOptions>
    </styled.NavWrapper>
  );
};

export default Navbar;
