import axios from "axios";
import { createInstance } from "./index.js";

const instance = createInstance();

const login = (success, fail) => {
	document.location.href = process.env.REACT_APP_TEST;
}

export {login};