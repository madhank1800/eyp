import axios from "axios";
import { config } from "../Config/config";

const signInApi = async (userData) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}${config.login}`,
      userData
    );
    console.log("res::", response.data);
    // localStorage.setItem("token",response.data.token)
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { signInApi };
