import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as driverActions from '../actions/drivers';
import Login from '../screens/LoginSreen';

const mapStateToProps = ({ driverReducer }) => {
  return {
    auth: driverReducer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(driverActions ,dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
