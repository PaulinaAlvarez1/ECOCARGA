import AsyncStorage from '@react-native-community/async-storage';

import {
  HOST, END_POINTS
} from '../constants/constants';

import {
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAILURE,
  REGISTER_REQUEST_SUCCESSFUL,
  AUTH_REQUEST,
  AUTH_REQUEST_FAILURE,
  AUTH_REQUEST_SUCCESSFUL,
  DOCUMENT_TYPE_REQUEST,
  DOCUMENT_TYPE_REQUEST_SUCCESSFUL,
  DELETE_VEHICLE_REQUEST_FAILURE,
  SET_TOKEN,
} from '../constants/actionsTypes';

export const getDocumentTypes = () => dispatch => {
  const url = `${HOST}/${END_POINTS.documentTypes}`;

  fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => dispatch(getDocumentTypesSuccessful(res)))
  .catch(error => console.log(error))
}

export const registerDriver = data => dispatch => {
  const url = `${HOST}/${END_POINTS.register}`;

  dispatch(registerDriverRequest());
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => dispatch(registerDriverRequestSuccessful()))
  .catch(error => dispatch(registerDriverRequestFailure()))
}

export const authdDrive = (data, navigation) => dispatch =>{
  const url = `${HOST}/${END_POINTS.auth}`;

  dispatch(authRequest());
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    dispatch(setToken({token: res.token.accessToken, driverId: res.user.id}))
    AsyncStorage.setItem('token', res.token.accessToken);
    AsyncStorage.setItem('driverId', `${res.user.id}`);
    dispatch(navigation.navigate('Home'));
  })
  .catch(error => dispatch(authRequestFailure()))
}

const registerDriverRequest = () => dispatch => {
  dispatch({
    type: REGISTER_REQUEST
  })
}

const registerDriverRequestSuccessful = () => dispatch => {
  dispatch({
    type: REGISTER_REQUEST_FAILURE
  })
}

const registerDriverRequestFailure = () => dispatch => {
  dispatch({
    type: REGISTER_REQUEST_SUCCESSFUL
  })
}

const authRequest = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST
  })
}

const authRequestSuccessful = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST_SUCCESSFUL
  })
}

const authRequestFailure = () => dispatch => {
  dispatch({
    type: AUTH_REQUEST_FAILURE
  })
}

const getDocumentTypesSuccessful = documents => dispatch => {
  dispatch({
    type: DOCUMENT_TYPE_REQUEST_SUCCESSFUL,
    payload: documents
  })
}

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token,
  })
}
