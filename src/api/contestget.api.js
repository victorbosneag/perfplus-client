import routes from "./api.config";

const url = "http://localhost:5000" + routes.login;

export const getContest = async () => {
  try{
    const response = fetch(url, {
      method:"GET"
    })
    const responseData = (await response).json()
    return responseData;
  }
  catch(err){
    throw new Error("Contest list error");
  }
}