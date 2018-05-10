import React from "react";
import PropTypes from "prop-types";
import { ChipContainer } from "Containers/ChipContainer";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export const ChipContainerWrapper = props => {
  const chippoUnits = props.chips.map(item => (
    <ChipContainer key={item.id} item={item} {...props} />
  ));

  return (
    <div className="chips-wrap">
      <ReactCSSTransitionGroup
        transitionName="chippo"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {chippoUnits}
      </ReactCSSTransitionGroup>
    </div>
  );
};

ChipContainerWrapper.propTypes = {
  chips: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  removeChip: PropTypes.func.isRequired
};
орыв
