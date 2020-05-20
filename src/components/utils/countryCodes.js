//https://api.printful.com/countries


import axios from 'axios'

export const Codes = () => {
   
  
    return axios.create({
      headers: {
        Authorization: 'Basic dndqYjk1M2wtcGUyMS04bTVvOmt3ZTktdW9hNGh5bnUzdmd2'
      },
 baseURL: 'https://api.printful.com'
    });
  };
  