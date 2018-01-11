import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TopBar } from "Components/TopBar";
import { ErrorAlert } from "Components/ErrorAlert";
import * as actionCreators from "Action/actionCreators";
import { ErrorBoundary } from "Components/ErrorBoundary";
import { SwitchersContainer } from "./SwitchersContainer";
import { CityInputContainer } from "./CityInputContainer";
import { ChipContainerWrapper } from "./ChipContainerWrapper";
import { DayOrWeekSwitcher } from "Components/DayOrWeekSwitcher";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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

const MainContainer = props => (
	<div className="wrapper">
		<ErrorBoundary>
			<TopBar />
			<ErrorAlert error={props.error} />
			<div className="controls-wrapper">
				<div className="inputs-wrapper">
					<SwitchersContainer
						variantData={props.variantData}
						switchTemp={props.switchTemp}
						variant={props.variant}
						temp={props.temp}
					/>
					<CityInputContainer
						getData={props.getData}
						variant={props.variant}
					/>
				</div>
				<ChipContainerWrapper
					removeChip={props.removeChip}
					getData={props.getData}
					variant={props.variant}
					chips={props.chips}
				/>
			</div>
			<DayOrWeekSwitcher
				data={props.data}
				temp={props.temp}
				variant={props.variant}
			/>
		</ErrorBoundary>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

MainContainer.propTypes = {
	error: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	temp: PropTypes.string.isRequired,
	variant: PropTypes.string.isRequired,
	getData: PropTypes.func.isRequired,
	removeChip: PropTypes.func.isRequired,
	chips: PropTypes.array.isRequired,
	switchTemp: PropTypes.func.isRequired,
	variantData: PropTypes.func.isRequired
};
