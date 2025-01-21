import styled from "styled-components";
import { css } from "styled-components";

export const HideScrollBarMixin = css`
  overflow-y: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

export const ShadowContainer = styled.div.attrs({
  className: "ShadowContainer",
})`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 30px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
