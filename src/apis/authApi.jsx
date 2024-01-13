
import axios from "axios";


const BASE_URL="http://localhost:8080/api/user/"
const signInApi = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, userData);
        console.log("res::", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export {
    signInApi
}