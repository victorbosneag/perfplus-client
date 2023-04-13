import routes from "./api.config";

const url = "http://localhost:5000" + routes.addfile;

export const addfile = async (data = {}) => {
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
    var responseData = await response.text();
    if (responseData !== "Success") {
      throw new Error("Add file fail");
    }
  } catch (err) {
    throw new Error("Add file fail");
  }
  return responseData;
};
