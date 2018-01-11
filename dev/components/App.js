import { Home } from "./Home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "Action/actionCreators";

function mapStateToProps(state) {
	return {
		data: state.dataReducer,
		temp: state.tempReducer,
		error: state.errorReducer,
		chips: state.chipsReducer,
		variant: state.switchReducer		
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
