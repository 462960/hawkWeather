import React from 'react';
import PropTypes from 'prop-types';
import { DayItem } from 'Components/DayItem';
import { Loader } from 'Components/Loader';

export class DayContainer extends React.Component {
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
        : <DayItem {...this.props}/>}
      </div>
    )
  }
}

DayContainer.propTypes = {
  data: PropTypes.object.isRequired
}