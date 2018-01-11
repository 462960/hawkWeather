import React from "react";
import { TopBar } from "./TopBar";
import PropTypes from "prop-types";
import { ErrorAlert } from "./ErrorAlert";
import { ErrorBoundary } from "./ErrorBoundary";
import { PresentContainer } from "Containers/PresentContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { SwitchersContainer } from "Containers/SwitchersContainer";
import { CityInputContainer } from "Containers/CityInputContainer";
import { ChipContainerWrapper } from "Containers/ChipContainerWrapper";

export const Home = props => (
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
			<PresentContainer
				data={props.data}
				temp={props.temp}
				variant={props.variant}
			/>
		</ErrorBoundary>
	</div>
);

Home.propTypes = {
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
