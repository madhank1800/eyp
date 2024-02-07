import axios from "axios";
import { config } from "../Config/config";

const signInApi = async (userData) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}${config.login}`,
      userData
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("userid", response.data._id);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchAllUserApi = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}${config.getAllUsers}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export { signInApi,fetchAllUserApi };
