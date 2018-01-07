import React from 'react';
import PropTypes from 'prop-types';
import { DayContainer } from './DayContainer';
import { WeekContainer } from './WeekContainer';


export const PresentContainer = (props) => <div>
              	{props.variant == 'weather' ? <DayContainer {...props}/> : <WeekContainer {...props}/>}
              </div>

PresentContainer.propTypes = {
  variant: PropTypes.string.isRequired
}