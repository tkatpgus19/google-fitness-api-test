import axios from "axios";
import { API_GOOGLE_FITNESS } from "../config";

const createInstance = ()=>{
	return axios.create({
		baseURL: API_GOOGLE_FITNESS,
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export {createInstance};