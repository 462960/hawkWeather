import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Home } from './Home';
import * as actionCreators from '../action/actionCreators';
import { chipsReducer } from '../data/chips';
import { dataReducer } from '../reducers/dataReducer';
import { locationReducer } from '../reducers/locationReducer';

function mapStateToProps(state) {
  return {
    chips: state.chipsReducer,
    data: state.dataReducer,
    location: state.locationReducer
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Home);