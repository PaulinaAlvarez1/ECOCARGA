// @actiontypes
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

const initialState = {
  register: {
    isLoading: false,
    error: false,
    successful: false,
  },
  auth: {
    isLoading: false,
    successful: false,
    error: false,
  },
  documentTypes: [],
  userInfo: null
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case DOCUMENT_TYPE_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        documentTypes: action.payload
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        register: {
          isLoading: true,
          error: false,
          sucessful: false,
        },
      };
    }
    case REGISTER_REQUEST_FAILURE: {
      return {
        ...state,
        register: {
          error: true,
          isLoading: false,
          sucessful: false,
        },
      };
    }
    case REGISTER_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        register: {
          error: false,
          isLoading: false,
          sucessful: true,
        },
      };
    }
    case AUTH_REQUEST: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoading: true,
          error: false,
          sucessful: false,
        },
      };
    }
    case AUTH_REQUEST_FAILURE: {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: true,
          isLoading: false,
          sucessful: false,
        },
      };
    }
    case AUTH_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          isLoading: false,
          sucessful: true,
        },
      };
    }
    default:
      return state;
  }
};

export default driverReducer;
