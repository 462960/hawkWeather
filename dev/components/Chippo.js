import React from 'react';
import Chip from 'material-ui/Chip';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const Chippo = (props) => {
  return (
    <MuiThemeProvider>
               <Chip
    className="chip"
    //onRequestDelete={handleRequestDelete}
    //onClick={handleClick}
    >
          {props.item}
                </Chip>
            </MuiThemeProvider>
  )
}

