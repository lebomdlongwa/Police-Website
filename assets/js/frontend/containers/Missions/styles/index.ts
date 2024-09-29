import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  /* height: 100vh; */
  padding: 20px 0;
  background-color: ${Color.navyBlue};
`;

export const TileWrapper = styled.div.attrs({
  className: "TileWrapper",
})`
  padding: 20px 0;
  display: flex;
  height: 45vh;
  /* margin-bottom: 40px; */
`;

export const Container = styled.div.attrs({
  className: "Container",
})`
  position: relative;
  background-color: #0f4d96;
  height: 100%;
  width: 30%;
  margin: 0 20px;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.7);
  border-radius: 7px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const Tile = styled.div.attrs({
  className: "Tile",
})`
  background-color: #0f4d96;
`;

export const TileHeader = styled.div.attrs({
  className: "TileHeader",
})`
  font-size: x-large;
  padding-bottom: 30px;
`;

export const TileBody = styled.div.attrs({
  className: "TileBody",
})``;

export const TileGap = styled.div`
  width: 20%;
`;

export const Button = styled.div.attrs({
  className: "Button",
})`
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 40%;
  height: 50px;
  background-color: white;
  border: 3px solid #0f4d96;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  z-index: 1;

  &:hover {
    background-color: #0c213a;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
  }
`;
