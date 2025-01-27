import styled from "styled-components";
import { Color } from "../../colorCodes";

export const ListContainer = styled.div.attrs({
  className: "ListContainer",
})`
  width: 100%;
  background-color: ${Color.black};
`;

export const MissingListWrapper = styled.div.attrs({
  className: "MissingListWrapper",
})`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

export const WantedListWrapper = styled.div.attrs({
  className: "WantedListWrapper",
})`
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const ListHeader = styled.div.attrs({
  className: "ListHeader",
})`
  color: ${Color.white};
  font-size: 40px;
  margin: 30px 0;
  text-align: center;
`;

export const ListWrapper = styled.div.attrs({
  className: "ListWrapper",
})`
  position: relative;
`;

export const TilesWrapper = styled.div.attrs({
  className: "TilesWrapper",
})`
  width: 90%;
  height: 290px;
  margin: 0 auto;
  padding: 0 15px;
  width: 87%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding-left: 5px;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const PersonTiles = styled.div.attrs({
  className: "PersonTiles",
})`
  background-color: ${Color.navyBlue};
  min-width: 172px;
  width: 18vw;
  height: 90%;
  border-radius: 7px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
`;

export const NextButton = styled.div.attrs({
  className: "NextButton",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 37%;
  right: 60px;
  height: 50px;
  z-index: 100;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.8);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const PreviousButton = styled.div.attrs({
  className: "PreviousButton",
})`
  /* Find how to make button fixed */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 37%;
  left: 60px;
  height: 50px;
  z-index: 100;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.8);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
