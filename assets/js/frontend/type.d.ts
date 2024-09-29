import { Color } from "./components/colorCodes";

declare global {
  type Colors = keyof typeof Color;

  type VoidCallBack = () => void;
}
