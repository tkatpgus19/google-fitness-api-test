import axios from "axios";
import { API_GOOGLE_FITNESS } from "../config/index.js";

const createInstance = ()=>{
	return axios.create({
		baseURL: API_GOOGLE_FITNESS,
		headers: {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
			"Content-Type": "application/json",
		}
	});
}

export {createInstance};