import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const MissingPeopleWrapper = styled.div.attrs({
  className: "MissingPeopleWrapper",
})`
  padding: 20px;
  background-color: ${Color.chalk};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    padding: 7px;
  }
`;

export const UploadedFile = styled.div.attrs({
  className: "UploadedFile",
})``;
