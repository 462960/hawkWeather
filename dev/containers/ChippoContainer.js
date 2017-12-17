import React from 'react';
import { Chippo } from '../components/Chippo';


export const ChippoContainer = (props) => {

    const chippoUnits = props.chips.map(item => <Chippo
      key={item.id}
      item={item}
      {...props}
      />)
    
    return (
      <div className="chips-wrap">
      {chippoUnits}
      </div>
    )
  }


