import { Color } from "./components/colorCodes";

declare global {
  type Colors = keyof typeof Color;

  type VoidCallBack = () => void;

  type UserObject = {
    fullname: string;
    email: string;
    admin: boolean;
  };

  type User = UserObject | undefined;
}
