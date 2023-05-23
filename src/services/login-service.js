import axios from "axios";
import ENDPOINTS from "../constants/endpoints";

const getLoginDetails = async (payload) => await axios.post(ENDPOINTS.LOGIN, payload);

export default getLoginDetails;
