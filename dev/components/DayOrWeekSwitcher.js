import React from "react";
import PropTypes from "prop-types";
import { DayItem } from "./DayItem";
import { WeekContent } from "./WeekContent";
import { DataContainer } from "Containers/DataContainer";

export const DayOrWeekSwitcher = ({ variant, data, temp }) => (
	<DataContainer data={data} variant={variant}>
		{variant == "weather" ? (
			<DayItem data={data} temp={temp} />
		) : (
			<WeekContent data={data} temp={temp} />
		)}
	</DataContainer>
);

DayOrWeekSwitcher.propTypes = {
	variant: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	temp: PropTypes.string.isRequired
};
