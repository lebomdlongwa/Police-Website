import { CSSProperties } from "styled-components";

declare global {
  type IconProps = {
    h?: number;
    w?: number;
    c?: CSSProperties | string;
    children?: React.ReactNode;
  };
}
