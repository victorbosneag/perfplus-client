import routes from "./api.config";

const url = "http://localhost:5000" + routes.contestlist;

export const listContest = async () => {
  try{
    const response = fetch(url, {
      method:"GET"
    })
    const responseRawData = await response
    const responseData = await responseRawData.json();
    return responseData;
  }
  catch(err){
    throw new Error("Contest list error");
  }
}