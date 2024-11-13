import { CSSProperties } from "styled-components";

declare global {
  type IconProps = {
    size?: number;
    color?: CSSProperties | string;
    children?: React.ReactNode;
  };
}
