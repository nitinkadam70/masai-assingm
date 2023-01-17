import * as types from './actionType';

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  meetupsData: [],
  errorText: null,
};

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case types.GET_MEETUPS_LOADING:
      {}
  }
  return state;
};

export { reducer };
