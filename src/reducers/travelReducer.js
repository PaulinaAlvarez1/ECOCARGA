// @actiontypes
import {
  GET_TRAVELS_REQUEST_SUCCESSFUL
} from '../constants/actionsTypes';

const initialState = {
  travels: null,
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRAVELS_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        travels: action.payload
      }
    }
    default:
      return state;
  }
};

export default travelReducer;
