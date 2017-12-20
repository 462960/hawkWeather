import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const Switchers = (props) => <div className="switchers-wrap">
            <MuiThemeProvider>
              <DropDownMenu
  value={props.variant}
  onChange={props.handlePeriod}
  >
               <MenuItem value='weather' primaryText="Today" />
               <MenuItem value='forecast' primaryText="5 days" />
              </DropDownMenu>
            </MuiThemeProvider>
                       <br />
            <MuiThemeProvider>
              <DropDownMenu
  value={props.temp}
  onChange={props.handleTemp}
  >
               <MenuItem value="C" primaryText="C&deg;" />
               <MenuItem value="F" primaryText="F&deg;" />
              </DropDownMenu>
              </MuiThemeProvider>
            </div>

