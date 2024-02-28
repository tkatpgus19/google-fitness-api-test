import axios from "axios";
import { createInstance } from "./index.js";

const instance = createInstance();

const googleLogin = (success, fail) => {
	document.location.href = process.env.REACT_APP_TEST;
	const access_token = window.location.hash.split('&')[0].substring(14);
	console.log(access_token)
	localStorage.setItem('access_token', access_token);
}

// const getCode = () => {
// 	const url = new URL(document.location.href);
// 	alert(url.searchParams.get('code'));
// }


const getSteps = (success, fail, payload)=>{
	instance
		.post('/dataset:aggregate', payload)
		.then(success)
		.catch(fail)
}

export {
	googleLogin,
	// getCode,
	getSteps,
};