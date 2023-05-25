import axios from "axios";
import ENDPOINTS from "../constants/endpoints";

const getLoginDetails = (payload) => axios.post(ENDPOINTS.LOGIN, payload);

export default getLoginDetails;
