import axios from 'axios';
import {
  GET_AUTH_ERROR,
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_MEETUPS_ERROR,
  GET_MEETUPS_LOADING,
  GET_MEETUPS_SUCCESS,
  USER_REGISTER_SUCCESS,
} from './actionType';

//actions - Meetups data getting
const getMeetupsLoading = () => ({
  type: GET_MEETUPS_LOADING,
});

const getMeetupsSuccess = (data) => ({
  type: GET_MEETUPS_SUCCESS,
  payload: data,
});

const getMeetupsError = (err) => ({
  type: GET_MEETUPS_ERROR,
  payload: err,
});

//actions - auth
const getAuthLoading = () => ({
  type: GET_AUTH_LOADING,
});

const getAuthSuccess = (data) => ({
  type: GET_AUTH_SUCCESS,
  payload: data,
});

const getAuthError = (err) => ({
  type: GET_AUTH_ERROR,
  payload: err,
});

//user register

const userRegister = () => ({
  type: USER_REGISTER_SUCCESS,
});

//getting Data
export const getMeetupData = () => (dispatch) => {
  dispatch(getMeetupsLoading());
  axios({
    url: 'http://localhost:8080/meetups',
    method: 'GET',
  })
    .then((res) => {
      dispatch(getMeetupsSuccess(res.data));
    })
    .catch((err) => dispatch(getMeetupsError(err)));
};

//Auth
export const AuthCheck = (payload) => (dispatch) => {
  dispatch(getAuthLoading());
  axios
    .get('http://localhost:8080/users')
    .then((res) => {
      let check = res.data.filter((elem) => {
        if (
          elem.name == payload.name &&
          elem.password == payload.password
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (check.length === 0) {
        alert('Wrong Credentials');
      } else {
        alert('Login Successfully');
        dispatch(getAuthSuccess(check));
        window.location.href = '/home';
      }
    })
    .catch((err) => dispatch(getAuthError('Wrong Credentials')));
};

//register
export const userRegisterCall = (payload) => (dispatch) => {
  axios({
    url: 'http://localhost:8080/users',
    method: 'POST',
    data: payload,
    headers: { 'Content-type': 'Application/json' },
  })
    .then((res) => {
      dispatch(userRegister(res.data));
    })
    .catch((err) => console.log(err));
};
