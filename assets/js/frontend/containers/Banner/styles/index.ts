import styled from "styled-components";
import { Color } from "../../../components/colorCodes";
import banner from "../../../images/police_riot.jpg";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 500px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
  }
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LinksWrapper = styled.div.attrs({
  className: "LinksWrapper",
})`
  display: flex;
  justify-content: center;
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
