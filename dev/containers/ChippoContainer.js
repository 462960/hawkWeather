import React from 'react';
import { Chippo } from '../components/Chippo';


export class ChippoContainer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const chippoUnits = this.props.chips.map((item, i) => <Chippo key={i} item={item} {...this.props}/>)
    return (
      <div className="chips-wrap">
      {chippoUnits}
      </div>
    )
  }
}

