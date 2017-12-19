import React from 'react';
import { DayItem } from '../components/DayItem';


export class DayContainer extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const {data} = this.props;
    return (
      <div className="days-wrapper">
      <h3>{data.name}</h3>
      <DayItem {...this.props}/>
      </div>
    )
  }
}