import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as driverActions from '../actions/drivers';
import Register from '../screens/RegisterScreen';

const mapStateToProps = ({ driverReducer }) => {
  return {
    register: driverReducer.register,
    documentTypes: driverReducer.documentTypes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(driverActions ,dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
