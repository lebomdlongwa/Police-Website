import styled, { css } from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div.attrs({
  className: "ModalContainer",
})`
  width: 600px;
  min-height: 450px;
  background-color: ${Color.white};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const TopBody = styled.div.attrs({
  className: "TopBody",
})`
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  display: flex;
`;

export const LabelContentWrapper = styled.div.attrs({
  className: "LabelContentWrapper",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.div.attrs({
  className: "Label",
})`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${Color.gray};
`;

export const Content = styled.div.attrs({
  className: "Content",
})`
  width: 100%;
  font-size: 18px;
  font-weight: 800;
  color: ${Color.lightBlack};
`;

export const TopItemOne = styled.div.attrs({
  className: "TopItemOne",
})`
  width: 100%;
  height: 100%;
`;

export const TopItemTwo = styled(TopItemOne).attrs({
  className: "TopItemTwo",
})``;

export const BottomBody = styled.div.attrs({
  className: "BottomBody",
})`
  width: 100%;
  height: 340px;
  padding: 6px 15px;
  font-size: 18px;
`;

export const NameAndClothes = styled.div.attrs<{ isCrimeReport: boolean }>({
  className: "NameAndClothes",
})`
  width: 100%;
  height: ${({ isCrimeReport }) => (isCrimeReport ? "70px" : "100px")};
  border-top: 1px solid ${Color.lightgray};
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContent = styled(Content).attrs({
  className: "BottomContent",
})`
  padding-top: 10px;
  width: 100%;
  height: 100%;
`;

export const BottomLeftItem = styled.div.attrs<{ isCrimeReport: boolean }>({
  className: "BottomLeftItem",
})`
  width: 40%;
  max-width: 50%;
  height: 100%;
  flex: 1;
  ${({ isCrimeReport }) =>
    !isCrimeReport &&
    `${BottomContent} {
      font-size: 15px;
    }`}
`;

export const BottomCenterItem = styled.div.attrs({
  className: "BottomCenterItem",
})`
  width: 50%;
  max-width: 50%;
  height: 100%;
  flex: 1;
`;

export const BottomRightItem = styled.div.attrs({
  className: "BottomRightItem",
})`
  width: 10%;
  height: 100%;
`;

export const BottomInput = styled.input.attrs({
  className: "BottomInput",
})`
  width: 100%;
  border: none;
  height: 40px;
  font-size: 17px;
  font-weight: 800;
  color: ${Color.lightBlack};

  &:focus {
    outline: none;
  }
`;

export const BriefSummary = styled.div.attrs({
  className: "BriefSummary",
})`
  border-top: 1px solid ${Color.lightgray};
  margin-top: 20px;
  padding-top: 10px;
  width: 100%;
  height: 150px;

  ${BottomContent} {
    font-size: 15px;
  }
`;

export const ButtonWrapper = styled.div.attrs({
  className: "ButtonWrapper",
})`
  padding: 0 20px;
  padding-bottom: 20px;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
