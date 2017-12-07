import React from 'react';
import { Chippo } from '../components/Chippo';


export class ChippoContainer extends React.Component {
  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    console.log('Click!');
  }

  render() {
    const chippoUnits = this.props.chips.map(item => 
      <Chippo 
      key={item.id} 
      item={item} 
      {...this.props}
      handleClick={this.handleClick}
      />)
    return (
      <div className="chips-wrap">
      {chippoUnits}
      </div>
    )
  }
}

