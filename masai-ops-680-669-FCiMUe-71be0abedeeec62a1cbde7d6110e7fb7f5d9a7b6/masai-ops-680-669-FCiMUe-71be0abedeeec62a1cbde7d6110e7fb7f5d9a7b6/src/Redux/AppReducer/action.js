import axios from 'axios';
import {
  GET_MEETUPS_ERROR,
  GET_MEETUPS_LOADING,
  GET_MEETUPS_SUCCESS,
} from './actionType';

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

export const getMeetupData = () => (dispatch) => {
  dispatch(getMeetupsLoading());
  axios({
    url: 'http://localhost:8080/meetups',
    method: 'GET',
  })
    .then((res) => {
      dispatch(getMeetupsSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => dispatch(getMeetupsError(err)));
};
