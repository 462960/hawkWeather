import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { DayContainer } from 'Containers/DayContainer';
import { WeekContainer } from 'Containers/WeekContainer';

export const DayOrWeekSwitcher = ({variant, data, temp}) => 
			<Fragment>
				{variant == 'weather' ? 
				<DayContainer data={data} temp={temp}/> : 
				<WeekContainer data={data} temp={temp}/>}
			</Fragment>

DayOrWeekSwitcher.propTypes = {
  variant: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  temp: PropTypes.string.isRequired
}