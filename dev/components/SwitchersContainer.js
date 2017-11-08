import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switchers} from './Switchers';

const styles = {
  customWidth: {
    width: 200,
  },
};

export class SwitchersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  // handleChange = (event, index, value) => this.setState({value});
  handleChange(e, index, value){
    return this.setState({value})
  }

  render() {
    return <Switchers {...this.props} handleChange={this.handleChange} value={this.state.value}/>
  }
}