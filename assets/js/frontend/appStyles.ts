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
