import { baseUrl, httpGet } from "../requests";

export const getUser = () => httpGet("/user");

export const signIn = () =>
  fetch(`${baseUrl}/auth/google`)
    .then(() => getUser())
    .catch((err) => console.error("Error Signing In: ", err));

export const logOut = () =>
  fetch(`${baseUrl}/auth/logout`).catch((err) =>
    console.error("Error Logging Out: ", err)
  );
