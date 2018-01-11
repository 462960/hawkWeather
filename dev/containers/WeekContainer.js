import React from 'react';
import PropTypes from 'prop-types';
import { WeekContent } from 'Components/WeekContent';
import { Loader } from 'Components/Loader';

export class WeekContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    (this.props.data !== nextProps.data) && this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div>
      {this.state.isLoading ?
        <Loader/>
        : <WeekContent {...this.props}/>}
      </div>
    )
  }
}

WeekContainer.propTypes = {
  data: PropTypes.object.isRequired
}