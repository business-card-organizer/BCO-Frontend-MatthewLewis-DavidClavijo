import axios from "axios";
import { axiosWithAuth } from "../components/authentification/axiosWithAuth";

//********************Action for Login ****************/

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const submitLogin = loginData => dispatch => {
  dispatch({ type: POST_START });
  axios
    .post(
      "https://business-cards-organizer-ls.herokuapp.com/api/auth/login",
      loginData
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: POST_START,
        payload: res.data
      });
    })
    .catch(err => console.log(err.status));
};

//******************** Action for Register ****************/

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const submitRegister = registerData => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post(
      "https://business-cards-organizer-ls.herokuapp.com/api/auth/register",
      registerData
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.status
      });
    });
};

//******************** Action for Getting User Data ****************/

export const FETCH_USERDATA_START = "FETCH_USERDATA_START";
export const FETCH_USERDATA_SUCCESS = "RFETCH_USERDATA_SUCCESS";
export const FETCH_USERDATA_FAIL = "FETCH_USERDATA_FAIL";

export const getUserData = () => dispatch => {
  dispatch({ type: FETCH_USERDATA_START });
  axiosWithAuth()
    .get("https://business-cards-organizer-ls.herokuapp.com/api/user")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_USERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_USERDATA_FAIL, payload: err });
    });
};
