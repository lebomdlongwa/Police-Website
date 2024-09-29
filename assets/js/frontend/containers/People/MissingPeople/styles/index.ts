import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const MissingPeopleWrapper = styled.div.attrs({
  className: "MissingPeopleWrapper",
})`
  padding: 20px;
  background-color: ${Color.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    padding: 7px;
  }
`;

export const Picture = styled.div.attrs({
  className: "Picture",
})`
  height: 100%;
  width: 18vw;
  border: 1px solid #0c213a;
`;

export const UploadedFile = styled.div.attrs({
  className: "UploadedFile",
})``;

// export const Upload = styled(Button)`
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   height: 20px;
//   width: 20px;
// `;
