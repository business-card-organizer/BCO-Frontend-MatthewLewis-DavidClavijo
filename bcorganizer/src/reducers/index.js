import { POST_START, POST_SUCCESS, POST_FAIL } from '../actions';

const initialState = {
  user: {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    Organization: "",
    job_title: "",
    email: "",
    phone: "",
    qr_code: ""
  },
  isLoading: false,
  error: ""
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case POST_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          qr_code: action.payload.data.qrCode
        },
        isLoading: false,
        error: ''
      }
    case POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default reducer;