import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
const baseUrl = "http://localhost:7000/api/";

const login = async (user, dispatch) => {


  dispatch(loginStart());

  
  try {
    const res = await axios.post(baseUrl+"auth/login", user);
    console.log('login: ', res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log('login error: ', err);
    dispatch(loginFailure());
  }
};

export default login;