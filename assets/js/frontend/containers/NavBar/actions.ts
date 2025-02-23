import { baseUrl, httpGet } from "../requests";

export const getUser = async () => await httpGet("/user");

export const signIn = async () => {
  try {
    const response = await fetch(`${baseUrl}/auth/google`);

    return getUser();
  } catch (err) {
    console.error("Error Signing In: ", err);
  }
};

export const logOut = async () => {
  try {
    const response = await fetch(`${baseUrl}/auth/logout`);
  } catch (err) {
    console.error("Error Logging Out: ", err);
  }
};
