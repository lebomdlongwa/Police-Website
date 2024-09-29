import React from "react";
import * as styled from "./styles/homePage";
import Banner from "./Banner";
import TilePageLinks from "./Missions";
import { HorizontalPeopleList } from "../components/HorizontalPeopleList/horizontal";

export const HomePage = () => {
  return (
    <styled.HomePageWrapper>
      <Banner />
      <TilePageLinks />
      <HorizontalPeopleList />
    </styled.HomePageWrapper>
  );
};
