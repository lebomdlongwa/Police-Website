import styled from "styled-components";
import { Color } from "../../colorCodes";

export const Wrapper = styled.div`
  /* position: absolute; */
  /* bottom: 20px; */
  /* top: 20px; */
  display: flex;
  align-items: center;
`;

// type SettingsProps = {
//   size?: "small" | "medium" | "large";
//   colorOnHover?: string;
//   color?: string;
//   rounded?: boolean;
// };

export const ButtonContent = styled.div`
  padding: 7px 12px;
  border-radius: 4px;
  color: white;
  background-color: ${Color.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  &:hover {
    background-color: ${Color.blue};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
