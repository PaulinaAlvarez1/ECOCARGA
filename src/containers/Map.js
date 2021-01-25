import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as travelActions from '../actions/travels';
import Map from '../screens/MapScreen';

const mapStateToProps = ({ travelReducer }) => {
  return {
    travels: travelReducer.travels,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(travelActions ,dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
