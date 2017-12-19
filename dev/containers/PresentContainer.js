import React from 'react';
import { DayContainer } from '../containers/DayContainer';
import { WeekContainer } from '../containers/WeekContainer';


export const PresentContainer = (props) =>
              <div>
              	{props.variant == 'weather' ? <DayContainer {...props}/> : <WeekContainer {...props}/>}
              </div>