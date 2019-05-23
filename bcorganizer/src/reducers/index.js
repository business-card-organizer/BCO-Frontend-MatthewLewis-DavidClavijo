import { LOG_START, LOG_SUCCESS, LOG_FAIL, LOGOUT_SUCCESS } from "../actions";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";
import { FETCH_USERDATA_START, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_FAIL } from "../actions";
import { GET_COLLECTION_START, GET_COLLECTION_SUCCESS, GET_COLLECTION_FAIL } from "../actions";

const initialState = {
  user: [],
  isLoading: false,
  error: "",
  isLoggedIn: false,
  cards: []
};

function reducer(state = initialState, action) {
  switch (action.type) {

    /************ Reducers for Login *****************/
    case LOG_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOG_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          qr_code: action.payload.data.qrCode
        },
        isLoading: false,
        error: "",
      };
    case LOG_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
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
        user: [...state.user, ...action.payload],
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    /************ Reducers for Fetch *****************/

    case FETCH_USERDATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.payload.firstName,
          last_name: action.payload.lastName,
          id: action.payload.id,
          email: action.payload.email,
          organization: action.payload.organization,
          phone: action.payload.phone,
          jobTitle: action.payload.jobTitle,
          qrCode: action.payload.qrCode,
          username: action.payload.username
        },
        isLoggedIn: true
      };
    case FETCH_USERDATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    /************ Reducers for Collection *****************/
    case GET_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_COLLECTION_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, ...action.payload]
      };
    case GET_COLLECTION_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
