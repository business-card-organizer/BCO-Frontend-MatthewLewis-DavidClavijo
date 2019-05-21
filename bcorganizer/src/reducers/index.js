import { POST_START, POST_SUCCESS, POST_FAIL } from '../actions';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions';


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

    /************ Reducers for Register *****************/
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        user: {
          ...state.user,
          qr_code: action.payload.data.qrCode
        }
      }
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}

export default reducer;