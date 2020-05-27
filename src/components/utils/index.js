import axios from "axios";
require("dotenv").config();
export const API = () => {
  return axios.create({
    headers: {
      Authorization: process.env.REACT_APP_Auth,
    },
    baseURL: process.env.REACT_APP_API_URL1,
  });
};
