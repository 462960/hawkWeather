import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Chippo } from 'Components/Chippo';


export const ChippoContainer = (props) => {

  const chippoUnits = props.chips.map(item => <Chippo
    key={item.id}
    item={item}
    {...props}
    />)

  return (
    <div className="chips-wrap">
     <ReactCSSTransitionGroup
    transitionName="chippo"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>
      {chippoUnits}
      </ReactCSSTransitionGroup>
      </div>
  )
}

ChippoContainer.propTypes = {
  chips: PropTypes.array.isRequired
}


