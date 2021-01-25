import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as driversActions from '../actions/drivers';
import Loading from '../screens/LoadingScreen';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(driversActions ,dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Loading);
