import routes from "./api.config";

const url = "http://localhost:5000" + routes.addparticipant;

export const addParticipant = async (data = {}) => {
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
    throw new Error("Add participant failed");
  }

  if (responseData.name === "typeField") {
    throw new Error("Type of field mismatch");
  }
  return responseData;
};
