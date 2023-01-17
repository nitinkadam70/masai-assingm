import {
  GET_AUTH_SUCCESS,
  GET_MEETUPS_ERROR,
  GET_MEETUPS_LOADING,
  GET_MEETUPS_SUCCESS,
} from './actionType';

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  meetupsData: [],
  errorText: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEETUPS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_MEETUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meetupsData: action.payload,
      };

    case GET_MEETUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        meetupsData: [],
        errorText: action.payload,
      };

    case GET_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
