import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const styles = {
//   customWidth: {
//     width: 200,
//   },
// };

export const Switchers = (props) =>

          <MuiThemeProvider>
            <div>
              <DropDownMenu 
              value={props.value} 
              onChange={props.handleChange}
              >
               <MenuItem value={1} primaryText="Today" />
               <MenuItem value={2} primaryText="Tomorrow" />
               <MenuItem value={3} primaryText="Week" />
               <MenuItem value={4} primaryText="2 Weeks" />
              </DropDownMenu>
                       <br />
              <DropDownMenu
               value={props.value}
               onChange={props.handleChange}
                       >
               <MenuItem value={1} primaryText="C&deg;" />
               <MenuItem value={2} primaryText="F&deg;" />
              </DropDownMenu>
            </div>
          </MuiThemeProvider>
