//https://api.printful.com/countries

import axios from "axios";
require("dotenv").config();
export const Codes = () => {
  return axios.create({
    headers: {
      Authorization: process.env.REACT_APP_Auth,
    },
    baseURL: process.env.REACT_APP_API_URL2,
  });
};
