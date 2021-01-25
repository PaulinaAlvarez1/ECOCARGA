import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as vehicleActions from '../actions/vehicles';
import * as travelActions from '../actions/travels';
import Home from '../screens/HomeSreen';

const mapStateToProps = ({ vehicleReducer, travelReducer }) => {
  return {
    getVehicleState: vehicleReducer.getVehicle,
    deleteVehicle: vehicleReducer.deleteVehicle,
    vehicles: vehicleReducer.vehicles,
    travels: travelReducer.travels
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...vehicleActions, ...travelActions } ,dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
