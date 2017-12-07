import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { getUserDetails } from '../action/actionCreators';
import { UserProfile } from './UserProfile';
import { Home } from './Home';
import { chipsReducer } from '../data/chips';
import * as actionCreators from '../action/actionCreators';

function mapStateToProps(state) {
  return {
    chips: state.chipsReducer,
    user: state
  }
}
;

//const mapStateToProps = (state) => ({ user: state }); 

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
;

// const mapDispatchToProps = (dispatch) => (
// {
//   getUserDetails: (username) => dispatch(getUserDetails(username))
// }
// )

export const App = connect(mapStateToProps, mapDispatchToProps)(Home);