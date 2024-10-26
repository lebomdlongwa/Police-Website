import styled from "styled-components";
import { Color } from "../../colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 390px;
  height: 44.4px;
  border: 2px solid ${Color.darkBlue};
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
  color: ${Color.blue};
  padding: 10px;
`;

export const FileUploader = styled.div``;

export const Upload = styled.div.attrs({
  className: "Upload",
})`
  /* position: absolute; */
  height: 30px;
  width: 100px;
  border-radius: 4px;
  color: white;
  background-color: ${Color.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  /* visibility: hidden; */

  &:hover {
    background-color: ${Color.blue};
    cursor: pointer;
    transition: 0.3s ease;
  }
`;
