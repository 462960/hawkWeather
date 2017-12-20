import React from 'react';
import { DayItem } from '../components/DayItem';


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
      <div className="days-wrapper">
      {this.state.isLoading ?
        <div className="loader"><img  src={'./dev/images/Loading.gif'} alt="Loading"/></div>
        : <DayItem {...this.props}/>}
      </div>
    )
  }
}