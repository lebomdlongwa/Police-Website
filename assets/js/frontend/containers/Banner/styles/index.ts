import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  min-height: 100vh;
  background-color: ${Color.darkBlue};
  color: black;
  position: relative;
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const LinksWrapper = styled.div.attrs({
  className: "LinksWrapper",
})`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 30px;
  padding: 0 30px;
  z-index: 10;
`;

export const Links = styled.div.attrs({
  className: "Links",
})`
  font-size: 23px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
    cursor: pointer;
  }
`;
