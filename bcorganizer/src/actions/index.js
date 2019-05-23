import axios from "axios";
import { axiosWithAuth } from "../components/authentification/axiosWithAuth";

//********************Action for Login ****************/

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const submitLogin = loginData => dispatch => {
  dispatch({ type: POST_START });
  return axios
    .post(
      "https://business-cards-organizer-ls.herokuapp.com/api/auth/login",
      loginData
    )
    .then(res => {
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
  return axios
    .post(
      "https://business-cards-organizer-ls.herokuapp.com/api/auth/register",
      registerData
    )
    .then(res => {
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
      console.log(res);
      dispatch({ type: FETCH_USERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_USERDATA_FAIL, payload: err });
    });
};

//******************** Action for Getting users collection ****************/

export const GET_COLLECTION_START = "GET_COLLECTION_START";
export const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
export const GET_COLLECTION_FAIL = "GET_COLLECTION_FAIL";

export const getCollectionData = () => dispatch => {
  dispatch({ type: GET_COLLECTION_START });
  axiosWithAuth()
    .get("https://business-cards-organizer-ls.herokuapp.com/api/cards")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_COLLECTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_COLLECTION_FAIL, payload: err });
    });
};

//******************** Action for Getting QrCode Cards ****************/

export const POST_QRCODE_START = "POST_QRCODE_START";
export const POST_QRCODE_SUCCESS = "POST_QRCODE_SUCCESS";
export const POST_QRCODE_FAIL = "POST_QRCODE_FAIL";

export const postQrcode = qrcode => dispatch => {
  dispatch({ type: POST_QRCODE_START });
  axiosWithAuth().post('https://business-cards-organizer-ls.herokuapp.com/api/cards/qr', qrcode)
    .then(res => {
      console.log(res)
      dispatch({
        type: POST_QRCODE_SUCCESS,
        payload: res.data
      })
    })
    .catch(error => {
      console.log(error.message)
      dispatch({
        type: POST_QRCODE_FAIL,
        payload: error.message
      })
    })
}
