type Credentials = {
  username: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  try {
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentials }),
    });
    const responseJSON = await response.json();

    if (responseJSON.data) {
      sessionStorage.setItem("user_id", `${responseJSON.id}`);
    } else {
      throw Error("Failed to Login");
    }

    return responseJSON.data || [];
  } catch (error) {
    console.error("There was an error when executing login: ", error);
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await fetch("http://localhost:4000/api/fetch_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const responseJSON = await response.json();

    return responseJSON.data || [];
  } catch (error) {
    console.error("There was an error executing email login: ", error);
  }
};

export const login = async (credentials: Credentials) => {
  try {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentials }),
    });
    const responseJSON = await response.json();

    if (responseJSON.data) {
      sessionStorage.setItem("token", `${responseJSON.data.token}`);
    } else {
      throw Error("Failed to Login");
    }

    return responseJSON.data || [];
  } catch (error) {
    console.error("There was an error when executing login: ", error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const responseJSON = await response.json();

    if (response.ok) {
      sessionStorage.removeItem("user_id");
    } else {
      throw Error("Failed to Logout");
    }

    return responseJSON.data || [];
  } catch (error) {
    console.error("There was an error when executing logout: ", error);
  }
};

export const signUpWithGoogle = () => {
  window.location.href = "http://localhost:4000/auth/google";
};
