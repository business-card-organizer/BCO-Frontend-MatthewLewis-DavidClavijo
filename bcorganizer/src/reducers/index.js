import { POST_START, POST_SUCCESS, POST_FAIL } from "../actions";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";
import { FETCH_USERDATA_START, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_FAIL } from "../actions";

const initialState = {
  user: [],
  isLoading: false,
  error: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          qr_code: action.payload.data.qrCode
        },
        isLoading: false,
        error: ""
      };
    case POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    /************ Reducers for Register *****************/
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        user: [...state.user, ...action.payload]
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };

    /************ Reducers for Register *****************/
    case FETCH_USERDATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USERDATA_SUCCESS:
      console.log(action.payload.firstName);
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.payload.firstName,
          last_name: action.payload.lastName
        }
      };
    case FETCH_USERDATA_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
