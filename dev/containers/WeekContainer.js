import React from 'react';
import PropTypes from 'prop-types';
import { WeekContent } from '../components/WeekContent';


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
        <div className="loader"><img  src={'./dev/images/Loading.gif'} alt="Loading"/></div>
        : <WeekContent {...this.props}/>}
      </div>
    )
  }
}

WeekContainer.propTypes = {
  data: PropTypes.object.isRequired
}