type MissingPersonParams = {
  id?: string;
  fullname: string;
  age: string;
  last_seen: string;
  last_place_seen: string;
  clothes?: string;
  height?: string;
  weight?: string;
  body_stature?: "skinny" | "medium" | "fat";
  skin_colour: string;
};
