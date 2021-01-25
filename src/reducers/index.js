// @vendors
import { combineReducers } from 'redux';

// @reducers
import driverReducer from '../reducers/driverReducer';
import vehicleReducer from '../reducers/vehicleReducer';
import travelReducer from '../reducers/travelReducer';

const AppReducer = combineReducers({
  driverReducer,
  travelReducer,
  vehicleReducer
});

export default AppReducer;
