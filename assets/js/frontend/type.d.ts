import { Color } from "./components/colorCodes";

declare global {
  type Colors = keyof typeof Color;

  type VoidCallBack = () => void;

  type UserObject = {
    id: string;
    name: string;
    surname: string;
    username?: string;
    avatar: string;
    email?: string;
    admin?: boolean;
  };

  type User = UserObject | undefined;
}
