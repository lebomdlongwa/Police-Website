import React from "react";
import * as styled from "./styles/homePage";
import TilePageLinks from "./Missions";
import { HorizontalPeopleList } from "../components/HorizontalPeopleList/horizontal";
import Banner from "./Banner";

export const HomePage = () => {
  return (
    <styled.HomePageWrapper>
      <Banner />
      <TilePageLinks />
      <HorizontalPeopleList />
    </styled.HomePageWrapper>
  );
};
