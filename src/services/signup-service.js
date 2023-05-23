import axios from "axios";
import ENDPOINTS from "../constants/endpoints";

const signupUser=data=>axios.post(ENDPOINTS.SIGNUP,data)

export default signupUser