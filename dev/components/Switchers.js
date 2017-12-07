import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const Switchers = (props) => <div className="switchers-wrap">
            <MuiThemeProvider>
              <DropDownMenu
  value={props.period}
  onChange={props.handlePeriod}
  >
               <MenuItem value={1} primaryText="Today" />
               <MenuItem value={2} primaryText="Tomorrow" />
               <MenuItem value={3} primaryText="Week" />
               <MenuItem value={4} primaryText="2 Weeks" />
              </DropDownMenu>
            </MuiThemeProvider>
                       <br />
            <MuiThemeProvider>
              <DropDownMenu
  value={props.temp}
  onChange={props.handleTemp}
  >
               <MenuItem value={1} primaryText="C&deg;" />
               <MenuItem value={2} primaryText="F&deg;" />
              </DropDownMenu>
              </MuiThemeProvider>
            </div>

