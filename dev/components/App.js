import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Home } from './Home';
import * as actionCreators from '../action/actionCreators';
import { dataReducer } from '../reducers/dataReducer';
import { chipsReducer } from '../reducers/chipsReducer';
import { errorReducer } from '../reducers/errorReducer';

function mapStateToProps(state) {
  return {
    chips: state.chipsReducer,
    data: state.dataReducer,
    error: state.errorReducer,
    variant: state.switchReducer
  }
}
;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
;

export const App = connect(mapStateToProps, mapDispatchToProps)(Home);