import axios from "axios";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const submitLogin = loginData => dispatch => {
  dispatch({ type: POST_START });
  axios
    .post("https://business-cards-organizer-ls.herokuapp.com/api/auth/login", loginData)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token)
      dispatch({
        type: POST_START,
        payload: res.data
      })
    })
    .catch(err => console.log(err.status));
};

