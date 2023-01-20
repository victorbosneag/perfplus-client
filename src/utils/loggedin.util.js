import logout from "./logout.util";

const loginCheck = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    logout();
    return false;
  }
};

export default loginCheck;