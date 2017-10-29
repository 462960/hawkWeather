import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getUserDetails} from '../action/actionCreators';
import { UserProfile } from './UserProfile';

// function mapStateToProps(state){
// 	return {
//      prod: state.goodsList,
// 	}
// };

const mapStateToProps = (state) => ({ user: state }); 

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators(actionCreators, dispatch)
// };

const mapDispatchToProps = (dispatch) => (
	{ getUserDetails: (username) => dispatch(getUserDetails(username)) }
) 

export const App = connect(mapStateToProps, mapDispatchToProps)(UserProfile);