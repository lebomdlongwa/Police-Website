import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";

export const EndBarWrapper = styled.div.attrs({
  className: "EndBarWrapper",
})`
  width: 25%;
  height: 100%;
  background-color: ${Color.chalk};
  border-left: 2px solid ${Color.grayLighter};
`;

export const Header = styled.div.attrs({
  className: "Header",
})`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${Color.grayLighter};
  padding-left: 20px;
`;

export const HeaderButtonsWrapper = styled.div.attrs({
  className: "HeaderButtonsWrapper",
})`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.div.attrs<{ active?: boolean }>({
  className: "Button",
})`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ active }) => active && `4px solid ${Color.darkBlue}`};
`;

export const DetailsWrapper = styled.div.attrs({
  className: "DetailsWrapper",
})`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const DetailsHeader = styled.div.attrs({
  className: "DetailsHeader",
})`
  width: 100%;
  height: 30px;
  padding: 25px 20px 15px 20px;
  display: flex;
  justify-content: space-between;
`;

export const DetailsHeaderLabel = styled.div.attrs({
  className: "DetailsHeaderLabel",
})`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const DetailSettings = styled.div.attrs({
  className: "DetailSettings",
})`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InfoSectionWrapper = styled.div.attrs({
  className: "InfoSectionWrapper",
})`
  margin: auto;
  margin-top: 8px;
  width: 100%;
  height: 370px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 2px solid ${Color.grayLighter};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;
