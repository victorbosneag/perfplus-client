import routes from "./api.config";

const url = "http://localhost:5000" + routes.getfile

export const getFile = async (contest, type) => {
  try{
    let urlObj = new URL(url);
    
    
    urlObj.searchParams.append("contest", contest);
    urlObj.searchParams.append("type", type);
    
    const response = fetch(urlObj, {
      method:"GET"
    })

    const responseData = await response
    console.log(typeof(responseData))
  }
  catch(err){
    console.log(err)
    throw new Error("Contest file error");

  }
}