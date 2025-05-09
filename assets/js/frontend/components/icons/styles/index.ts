import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: "Wrapper",
})`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconImage = styled.img.attrs<{ size?: number; color?: string }>({
  className: "IconImage",
})`
  width: ${({ size }) => (size ? `${size}px` : "16px")};
  height: ${({ size }) => (size ? `${size}px` : "16px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color && color};
`;
