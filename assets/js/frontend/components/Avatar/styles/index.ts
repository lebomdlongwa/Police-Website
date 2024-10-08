import styled from "styled-components";
import { Color } from "../../colorCodes";

export const AvatarWrapper = styled.div.attrs<{ backgroundColor?: string }>({
  className: "AvatarWrapper",
})`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${Color.navyBlueLighter}`};
  margin-right: 30px;
`;

export const Avatar = styled.div.attrs({
  className: "Avatar",
})`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
