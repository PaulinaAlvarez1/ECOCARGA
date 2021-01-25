import {
  HOST, END_POINTS
} from '../constants/constants';

import {
  GET_TRAVELS_REQUEST_SUCCESSFUL
} from '../constants/actionsTypes';

export const getTravels = () => (dispatch, getState) => {
  const url = `${HOST}/${END_POINTS.travels}`;
  const { userInfo } = getState().driverReducer;
  const { token } = userInfo;

  fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => res.json())
  .then(res => dispatch(getTravelsRequestSuccessful(res)))
  .catch(error => console.log(error))
}

const getTravelsRequestSuccessful = travels => dispatch => {
  dispatch({
    type: GET_TRAVELS_REQUEST_SUCCESSFUL,
    payload: travels
  })
}
