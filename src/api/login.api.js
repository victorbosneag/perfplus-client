import routes from "./api.config";

const url = "http://localhost:5000" + routes.login;

export const login = async (data = {}) => {
  try{
    const response = await fetch(url, {
      method:"POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers:{
        'Content-Type':'application/json'
      },
      redirect:"follow",
      referrerPolicy:"no-referrer",
      body: JSON.stringify(data)
    });
    const responseData = response.json();
    console.log(responseData);
    if(responseData.success){
      console.log("yay ;))");
    }
  }
  catch(err){
    console.log(err);
  }
  
};
