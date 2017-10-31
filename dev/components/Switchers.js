import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class Switchers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  // handleChange = (event, index, value) => this.setState({value});
  handleChange(e, index, value){
    return this.setState({value})
  }

  render() {
    return (
      <div>
          <DropDownMenu 
          value={this.state.value} 
          onChange={this.handleChange}
          >
           <MenuItem value={1} primaryText="Never" />
           <MenuItem value={2} primaryText="Every Night" />
           <MenuItem value={3} primaryText="Weeknights" />
           <MenuItem value={4} primaryText="Weekends" />
           <MenuItem value={5} primaryText="Weekly" />
         </DropDownMenu>
         <br />
         <DropDownMenu
           value={this.state.value}
           onChange={this.handleChange}
           style={styles.customWidth}
           autoWidth={false}
         >
           <MenuItem value={1} primaryText="Custom width" />
           <MenuItem value={2} primaryText="Every Night" />
           <MenuItem value={3} primaryText="Weeknights" />
           <MenuItem value={4} primaryText="Weekends" />
           <MenuItem value={5} primaryText="Weekly" />
         </DropDownMenu>
      </div>
    );
  }
}