import axios from "axios";
import {API} from './config'
export const registerUser = (data) => {
  return axios.post( API + "/auth/register", JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  }).then(response => {
      console.log(response)
      return response.data
  }).catch(error => {
      console.log(error.message)
      return error
  })
};
