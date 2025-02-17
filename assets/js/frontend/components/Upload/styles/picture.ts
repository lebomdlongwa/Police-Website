import styled from "styled-components";
import { Color } from "../../colorCodes";
import { Link } from "react-router-dom";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 350px;
  height: 44.4px;
  border: 2px solid ${Color.darkBlueFont};
  border-radius: 4px;
  position: relative;
  padding: 0 5px;

  @media (max-width: 500px) {
    width: 100%;
    min-width: 240px;
  }
`;

export const InputPhoto = styled.div.attrs({
  className: "InputPhoto",
})`
  flex-grow: 1;
  color: ${Color.darkBlueFont};
  padding: 10px;
`;

export const FileUploader = styled.div``;

export const UploadInput = styled.input.attrs({
  className: "Upload",
  type: "file",
})`
  display: none;
`;

export const StyledLink = styled(Link).attrs({
  className: "StyledLink",
})`
  text-decoration: none;
  width: 100%;
`;
