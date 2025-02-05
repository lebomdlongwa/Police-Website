import styled from "styled-components";
import { Color } from "../../../../components/colorCodes";
import { Button as ButtonBase } from "../../../../components/Button/button";

export const AddFormContainer = styled.div.attrs({
  className: "AddFormContainer",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3001;
`;

export const FormWrapper = styled.div.attrs({
  className: "FormWrapper",
})`
  background-color: ${Color.white};
  position: absolute;
  right: 0;
  width: 35%;
  min-width: 400px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

export const FormHeader = styled.div.attrs({
  className: "FormHeader",
})`
  background-color: ${Color.navyBlue};
  width: 100%;
  height: 8vh;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  color: ${Color.white};
`;

export const FormBody = styled.div.attrs({
  className: "FormBody",
})`
  background-color: ${Color.white};
  width: 100%;
  padding: 20px 30px;
  height: 84vh;
  color: ${Color.white};
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

export const FormInputWrapper = styled.div.attrs({
  className: "FormInputWrapper",
})`
  width: 100%;
  color: ${Color.white};
  margin-bottom: 20px;
`;

export const FormLabel = styled.div.attrs({
  className: "FormLabel",
})`
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const RequiredAsterisk = styled.div.attrs({
  className: "RequiredAsterisk",
})`
  font-size: 18px;
  color: ${Color.navyBlueLighter};
  font-weight: 500;
  margin-left: 5px;
`;

// export const InputWrapper = styled.div.attrs({
//   className: "InputWrapper",
// })`
//   height: 6vh;
//   width: 100%;
//   position: relative;
// `;

// export const InputButton = styled.div.attrs({
//   className: "InputButton",
// })`
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
//   z-index: 100;
// `;

export const FormInput = styled.input.attrs({
  className: "FormInput",
})`
  width: 100%;
  height: 6vh;
  color: ${Color.darkBlueFont};
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px 10px;

  &:focus {
    outline: none;
  }
`;

export const FormFooter = styled.div.attrs({
  className: "FormFooter",
})`
  width: 100%;
  padding: 0 30px;
  color: ${Color.white};
  border: 1px solid lightgray;
  height: 8vh;
  position: absolute;
  bottom: 0;
  background-color: ${Color.grayLighter};
  display: flex;
  justify-content: space-between;
`;

export const FooterButton = styled(ButtonBase).attrs({
  className: "FooterButton",
})``;
