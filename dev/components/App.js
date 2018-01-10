import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Home } from './Home';
import * as actionCreators from '../action/actionCreators';

function mapStateToProps(state) {
  return {
    chips: state.chipsReducer,
    data: state.dataReducer,
    variant: state.switchReducer,
    temp: state.tempReducer
  }
}
;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
;

export default connect(mapStateToProps, mapDispatchToProps)(Home);