import React from 'react';
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
      <div className="week-container-wrapper">
      {this.state.isLoading ?
        <div className="loader"><img  src={'./dev/images/Loading.gif'} alt="Loading"/></div>
        : <WeekContent {...this.props}/>}
      </div>
    )
  }
}