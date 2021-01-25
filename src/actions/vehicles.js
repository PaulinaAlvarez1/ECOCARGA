import {
  HOST, END_POINTS
} from '../constants/constants';

import{
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_REQUEST_FAILURE,
  CREATE_VEHICLE_REQUEST_SUCCESSFUL,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_REQUEST_FAILURE,
  DELETE_VEHICLE_REQUEST_SUCCESSFUL, 
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_REQUEST_FAILURE,
  GET_VEHICLE_REQUEST_SUCCESSFUL,
  GET_VEHICLE_TYPES_REQUEST,
  GET_VEHICLE_TYPES_REQUEST_FAILURE,
  GET_VEHICLE_TYPES_REQUEST_SUCCESSFUL,
} from '../constants/actionsTypes'

export const createVehicle = (data, navigation) => (dispatch, getState) => {
  const url = `${HOST}/${END_POINTS.vehicles}`;
  const { userInfo } = getState().driverReducer;
  const { token } = userInfo;

  dispatch(createVehicleRequest())
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    dispatch(getVehicle());
    dispatch(createVehicleRequestSuccessful())
    dispatch(navigation.navigate('Home'));
  })
  .catch(res => dispatch(createVehicleRequestFailure()))
}


/// TERMINAR ACCIONES DE VEHICULOS Y EN DRIVER CREAR LOSFETCH
export const getVehicle = () => (dispatch, getState) => {
  const { userInfo } = getState().driverReducer;
  const { token, driverId } = userInfo;
  const url = `${HOST}/${END_POINTS.vehicles}/driver/${driverId}`;

  dispatch(getVehicleRequest())
  fetch(url, {
    method: 'GET',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => res.json())
  .then(res => dispatch(getVehicleRequestSuccessful(res)))
  .catch(res => dispatch(getVehicleRequestFailure()))
}

export const deleteVehicle = id => (dispatch, getState) => {
  console.log('entraaa')
  const url = `${HOST}/${END_POINTS.vehicles}/${id}`;
  const { userInfo } = getState().driverReducer;
  const { token } = userInfo;

  dispatch(deleteVehicleRequest())
  fetch(url, {
    method: 'DELETE',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => res.json())
  .then(res => {
      dispatch(getVehicle());
      dispatch(deleteVehicleRequestSuccessful());
    }
    )
  .catch(res => dispatch(deleteVehicleRequestFailure()))
}

export const getVehicleTypes = () => (dispatch, getState) => {
  const { userInfo } = getState().driverReducer;
  const { token } = userInfo;
  const url = `${HOST}/${END_POINTS.VehicleTypes}`;

  dispatch(getVehicleRequest())
  fetch(url, {
    method: 'GET',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => res.json())
  .then(res => {
    dispatch(getVehicleTypesRequestSuccessful(res))
  })
  .catch(res => dispatch(getVehicleRequestFailure()))
}

const createVehicleRequest = () => dispatch => {
  dispatch({
    type: CREATE_VEHICLE_REQUEST
  })
} 

const createVehicleRequestSuccessful =() => dispatch => {
  dispatch({
    type: CREATE_VEHICLE_REQUEST_SUCCESSFUL
  })
}

 const createVehicleRequestFailure = () => dispatch =>{
   dispatch({
     type: CREATE_VEHICLE_REQUEST_FAILURE
   })
 }

 const getVehicleRequest = () => dispatch => {
   dispatch({
     type: GET_VEHICLE_REQUEST
   })
 }

 const getVehicleRequestSuccessful = vehicles => dispatch => {
  dispatch({
    type: GET_VEHICLE_REQUEST_SUCCESSFUL,
    payload: vehicles
  })
}
  const getVehicleRequestFailure = () => dispatch => {
    dispatch({
      type: GET_VEHICLE_REQUEST_FAILURE
    })
  }

  const deleteVehicleRequest = () => dispatch => {
    dispatch({
      type: DELETE_VEHICLE_REQUEST
    })
  }

   const deleteVehicleRequestSuccessful = () => dispatch => {
     dispatch({
       type: DELETE_VEHICLE_REQUEST_SUCCESSFUL
     })
   }

   const deleteVehicleRequestFailure = () => dispatch => {
    dispatch({
      type: DELETE_VEHICLE_REQUEST_SUCCESSFUL
    })
  }

  const getVehicleTypesRequestSuccessful = types => dispatch => {
    dispatch({
      type: GET_VEHICLE_TYPES_REQUEST_SUCCESSFUL,
      payload: types
    })
  }
  