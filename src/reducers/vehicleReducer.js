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
  GET_VEHICLE_TYPES_REQUEST_SUCCESSFUL,
} from '../constants/actionsTypes'

const initialState = {
  createVehicle: {
    isLoading: false,
    successful: false,
    error: false,
  },
  getVehicle: {
    successful: false,
    isLoading: false,
    error: false,
  },
  deleteVehicle: {
    successful: false,
    isLoading: false,
    error: false,
  },
  vehicles: null,
  types: null,
};

export default vehicleReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_VEHICLE_TYPES_REQUEST_SUCCESSFUL: {
      return {
        ...state,
        types: action.payload
      }
    }
    case CREATE_VEHICLE_REQUEST: {
      return {
        ...state,
        createVehicle: {
          isLoading: true, 
          successful: false,
          error: false,
        }
      }
    }
    case CREATE_VEHICLE_REQUEST_FAILURE: {
      return {
          ...state,
          createVehicle: {
            isLoading: false, 
            successful: false,
            error: true,
          }
      }
    }
    case CREATE_VEHICLE_REQUEST_SUCCESSFUL:{
      return{
        ...state,
        createVehicle:{
          isLoading: false,
          successful: true,
          error: false,
        }
      }

    }
    case DELETE_VEHICLE_REQUEST:{
      return{
        ...state,
        deleteVehicle:{
          isLoading: true,
          successful: false,
          error: false,
        }
      }

    }
    case DELETE_VEHICLE_REQUEST_FAILURE:{
      return{
        ...state,
        deleteVehicle:{
          isLoading: false,
          successful: false,
          error: true,
        }
      }

    }
    case DELETE_VEHICLE_REQUEST_SUCCESSFUL:{
      return{
        ...state,
        deleteVehicle:{
          isLoading:false,
          successful: true, 
          error: false,
        }
      }

    }
    case GET_VEHICLE_REQUEST:{
      return{
        ...state,
        getVehicle:{
          isLoading:true,
          successful: false,
          error: false,
        }
      }

    }
    case GET_VEHICLE_REQUEST_FAILURE:{
      return{
        ...state,
        getVehicle:{
          isLoading:false,
          successful:false,
          error:true,
        },
        vehicles: null
      }

    }
    case GET_VEHICLE_REQUEST_SUCCESSFUL:{
      return{
        ...state,
        getVehicle:{
          isLoading:false,
          successful:true,
          error:false,
        },
        vehicles: action.payload
      }

    }
    default:
      return state;
  }
}
