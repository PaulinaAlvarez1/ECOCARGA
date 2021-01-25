import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as vehicleActions from '../actions/vehicles';
import Vehicle from '../screens/VehicleScreen';

const mapStateToProps = ({ vehicleReducer, driverReducer }) => {
  return {
    createVehicle: vehicleReducer.register,
    vehicles: vehicleReducer.vehicles,
    types: vehicleReducer.types,
    driverId: driverReducer.userInfo.driverId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(vehicleActions ,dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicle);
