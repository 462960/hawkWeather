import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Home } from './Home';
import * as actionCreators from '../action/actionCreators';
import { dataReducer } from '../reducers/dataReducer';
import { chipsReducer } from '../reducers/chipsReducer';

function mapStateToProps(state) {
  return {
    chips: state.chipsReducer,
    data: state.dataReducer
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Home);