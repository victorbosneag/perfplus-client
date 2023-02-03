import routes from "./api.config";

const url = "http://localhost:5000" + routes.login;

export const login = async (data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    var responseData = await response.json();
  } catch (err) {
    throw new Error ("Login failed");
  }
    console.log(responseData);
    if (responseData.success) {
      const token = { token: responseData.token };
      const role = {role: responseData.data.role};
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("role", JSON.stringify(role));
    }
    else{
      throw new Error("Login failed");
    }
};
