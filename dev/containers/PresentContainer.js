import React from 'react';
import PropTypes from 'prop-types';
import { DayContainer } from './DayContainer';
import { WeekContainer } from './WeekContainer';


export const PresentContainer = ({variant, data, temp}) => 
			<div>
				{variant == 'weather' ? 
				<DayContainer data={data} temp={temp}/> : 
				<WeekContainer data={data} temp={temp}/>}
			</div>

PresentContainer.propTypes = {
  variant: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  temp: PropTypes.string.isRequired
}