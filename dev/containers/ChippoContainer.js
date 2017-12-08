import React from 'react';
import { Chippo } from '../components/Chippo';


export class ChippoContainer extends React.Component {
  constructor(props) {
    super(props);
     this.handleChipClick = this.handleChipClick.bind(this);
  }

   handleChipClick() {
    console.log('Click!');
  }

  render() {
    const chippoUnits = this.props.chips.map(item => 
      <Chippo 
      key={item.id} 
      item={item} 
      {...this.props}
      handleChipClick={this.handleChipClick}
      />)
    return (
      <div className="chips-wrap">
      {chippoUnits}
      </div>
    )
  }
}

