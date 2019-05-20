import axios from "axios";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const submitLogin = loginData => dispatch => {
  dispatch({ type: POST_START });
  axios
    .post("https://business-cards-organizer.herokuapp.com/api/auth/login", loginData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
