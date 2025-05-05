import { toast } from "react-toastify";

type Credentials = {
  username: string;
  password: string;
};

export const signUp = (credentials: Credentials): Promise<UserObject> => {
  return toast.promise(
    new Promise((resolve, reject) =>
      fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credentials }),
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          sessionStorage.setItem("token", `${responseJSON.data.token}`);
          resolve(responseJSON.data);
        })
        .catch((error) => reject(error))
    ),
    {
      success: "Logged in successfull",
      error: "Invalid credentials",
    },
    {
      position: "bottom-left",
    }
  );
};

export const getUser = async (token: string) =>
  new Promise((resolve, reject) =>
    fetch("http://localhost:4000/api/fetch_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((responseJSON) => resolve(responseJSON.data))
      .catch((error) => reject(error))
  );

export const login = (credentials: Credentials): Promise<UserObject> => {
  return toast.promise(
    new Promise((resolve, reject) =>
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credentials }),
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          sessionStorage.setItem("token", `${responseJSON.data.token}`);
          resolve(responseJSON.data);
        })
        .catch((error) => reject(error))
    ),
    {
      success: "Logged in successfull",
      error: "Invalid credentials",
    },
    {
      position: "bottom-left",
    }
  );
};

export const logout = () => {
  return toast.promise(
    new Promise((resolve, reject) =>
      fetch("http://localhost:4000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          sessionStorage.removeItem("token");
          resolve(responseJSON.data || []);
        })
        .catch((error) => reject(error))
    ),
    {
      success: "Logged out successfull",
      error: "Error logging out",
    }
  );
};

export const signUpWithGoogle = () => {
  window.location.href = "http://localhost:4000/auth/google";
};
