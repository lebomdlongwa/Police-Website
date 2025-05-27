import React from "react";

import { HorizontalPeopleList } from "../components/HorizontalPeopleList/horizontal";

import * as styled from "./styles/homePage";
import Banner from "./Banner";

export const HomePage = ({ admin }: { admin: boolean }) => {
  return (
    <styled.HomePageWrapper>
      <Banner admin={admin} />
      {/* <TilePageLinks /> */}
      {/* {!admin && <HorizontalPeopleList />} */}
    </styled.HomePageWrapper>
  );
};
