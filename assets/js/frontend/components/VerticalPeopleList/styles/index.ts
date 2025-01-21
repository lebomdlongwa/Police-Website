import styled from "styled-components";
import { Color } from "../../colorCodes";
import { Link } from "react-router-dom";

export const VerticalListWrapper = styled.div.attrs({
  className: "VerticalListWrapper",
})`
  /* background-color: #0c213a; */
  margin-top: 10px;
  width: 85vw;
  height: calc(100vh - 108px);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Container = styled.div.attrs({
  className: "Container",
})`
  display: flex;
  flex-wrap: wrap;
  padding: auto;
  width: 100%;

  @media (max-width: 500px) {
    display: block;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PersonTile = styled(Link).attrs({
  className: "Person_Tile",
})`
  background-color: ${Color.darkBlue};
  width: 18vw;
  min-width: 172px;
  max-width: 220px;
  height: 40vh;
  min-height: 235px;
  max-height: 283px;
  border-radius: 7px;
  margin-top: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  margin-right: 10px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    max-width: 300px;
    width: 280px;
    margin-right: 0;

    &:hover {
      transform: none;
    }
  }
`;

export const TileContent = styled.div.attrs({
  className: " TileContent",
})`
  padding-left: 6px;
  padding-top: 5px;
  font-size: 15px;
`;

export const Details = styled.div.attrs({
  className: " Details",
})`
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 155px;
  position: absolute;
  bottom: 10px;
`;

export const NameAndAge = styled.div.attrs({
  className: " NameAndAge",
})`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const SurName = styled.div.attrs({
  className: " SurName",
})`
  display: flex;
  align-items: center;
`;
