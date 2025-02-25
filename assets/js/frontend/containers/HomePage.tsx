import React from "react";
import * as styled from "./styles/homePage";
import TilePageLinks from "./Missions";
import { HorizontalPeopleList } from "../components/HorizontalPeopleList/horizontal";
import Banner from "./Banner";
import { useUser } from "./userContext";

export const HomePage = () => {
  const { admin } = useUser();

  return (
    <styled.HomePageWrapper>
      <Banner />
      {/* <TilePageLinks /> */}
      {!admin && <HorizontalPeopleList />}
    </styled.HomePageWrapper>
  );
};
