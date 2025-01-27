import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  /* height: 100vh; */
  padding: 20px 0;
  background-color: ${Color.black};
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
  background-color: ${Color.white};
  height: 100%;
  width: 30%;
  margin: 0 20px;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
  border-radius: 7px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const Tile = styled.div.attrs({
  className: "Tile",
})`
  background-color: ${Color.white};
`;

export const TileHeader = styled.div.attrs({
  className: "TileHeader",
})`
  font-size: x-large;
  padding-bottom: 30px;
  color: ${Color.black};
`;

export const TileBody = styled.div.attrs({
  className: "TileBody",
})`
  color: ${Color.black};
`;

export const TileGap = styled.div`
  width: 20%;
`;

export const Button = styled.div.attrs({
  className: "Button",
})`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40%;
  height: 50px;
  background-color: ${Color.black};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  z-index: 1;
  color: ${Color.white};

  &:hover {
    background-color: #0c213a;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
  }
`;
