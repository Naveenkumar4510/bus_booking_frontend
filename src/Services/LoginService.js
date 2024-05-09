import axios from "axios";


const LOGIN_API='http://localhost:8080/login'

export const loginadmin=(username,password)=>{
  return axios.post(LOGIN_API,{username,password});
}