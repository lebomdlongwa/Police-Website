import styled from "styled-components";
import { Color } from "../../../components/colorCodes";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  width: 100vw;
  height: 100vh;
  background: ${Color.chalk};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlueBackground = styled.div.attrs({
  className: "BlueBackground",
})`
  width: 50%;
  height: 100%;
  background: ${Color.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBackground = styled.div.attrs({
  className: "WhiteBackground",
})`
  width: 50%;
  height: 100%;
  background: ${Color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div.attrs<{ notSignedIn: boolean }>({
  className: "FormWrapper",
})`
  position: relative;
  width: 500px;
  height: 100%;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.div.attrs({
  className: "BackButton",
})`
  position: absolute;
  top: 20px;
  left: 20px;

  &:hover {
    cursor: pointer;
    transition: 0.2 ease-in;
  }
`;

export const HeaderLabel = styled.div.attrs({
  className: "HeaderLabel",
})`
  width: 100%;
  font-size: 35px;
  font-weight: 800;
  color: ${Color.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div.attrs({
  className: "InputWrapper",
})`
  width: 100%;
  margin-top: 30px;
`;

export const Section = styled.div.attrs({
  className: "Section",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NameSurname = styled.div.attrs({
  className: "NameSurname",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FormInput = styled.input.attrs({
  className: "FormInput",
})`
  width: 100%;
  height: 40px;
  border: 2px solid ${Color.grayLighter};
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: ${Color.black};
  padding: 0 10px;

  &:focus {
    outline: none;
    border: 2px solid ${Color.darkBlue};
  }
`;

export const Label = styled.div.attrs({
  className: "Label",
})`
  font-size: 16px;
  font-weight: 600;
  color: ${Color.black};
  width: 100%;
`;

export const BlueText = styled.span.attrs({
  className: "BlueText",
})`
  color: ${Color.darkBlue};
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease-in;
  text-decoration: underline;
`;

export const SignInButtonsWrapper = styled.div.attrs<{ notSignedIn: boolean }>({
  className: "SignInButtonsWrapper",
})`
  display: flex;
  flex-direction: ${({ notSignedIn }) => (notSignedIn ? "column" : "row")};
  margin-top: 10px;
  align-items: center;
`;

export const SignInText = styled.div.attrs({
  className: "SignInText",
})`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 800;
  color: ${Color.gray};
  text-align: center;
  line-height: 40px;
`;

export const DefaultSignInWrapper = styled.div.attrs<{ notSignedIn: boolean }>({
  className: "DefaultSignInWrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ notSignedIn }) => notSignedIn && "width: 100%"};
  gap: 10px;
`;

export const GoogleButtonWrapper = styled.div.attrs<{ notSignedIn: boolean }>({
  className: "GoogleButton",
})`
  width: ${({ notSignedIn }) => (notSignedIn ? "100%" : "40%")};
  ${({ notSignedIn }) =>
    notSignedIn
      ? `border-top: 1px solid ${Color.grayLighter}; padding-top: 15px;`
      : `border-left: 2px solid ${Color.grayLighter}; padding-left: 10px; margin-left: 10px`};
  margin-top: ${({ notSignedIn }) => (notSignedIn ? "15px" : "0")};
`;

export const GoogleButton = styled.div.attrs<{ notSignedIn: boolean }>({
  className: "GoogleButton",
})`
  width: ${({ notSignedIn }) =>
    notSignedIn ? "100%" : "220px; padding-right: 10px"};
  height: 45px;
  height: ${({ notSignedIn }) => (notSignedIn ? "45px" : "40px")};
  font-size: ${({ notSignedIn }) => (notSignedIn ? "20px" : "14px")};
  :18px ;
  font-weight: 800;
  color: ${Color.gray};
  border: 1px solid ${Color.lightgray};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: 0.2 ease-in;
  }
`;

export const Footer = styled(SignInText).attrs({
  className: "Footer",
})`
  position: absolute;
  bottom: 8px;
  left: 0;
  border-top: 1px solid ${Color.lightgray};
  padding-top: 2px;
`;

export const GoogleIcon = styled.img.attrs({
  className: "GoogleIcon",
})`
  height: 90%;
`;
