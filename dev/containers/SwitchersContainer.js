import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switchers } from '../components/Switchers';

export class SwitchersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleTemp = this.handleTemp.bind(this);
    this.handlePeriod = this.handlePeriod.bind(this);
    this.state = {
      temp: 1,
    //period: 'weather'
    };
  }

  handleTemp(e, i, temp) {
    this.setState({
      temp
    })
  //console.log(temp)
  }

  handlePeriod(e, i, period) {
    this.props.variantData(period);
  }
  ;

  componentWillReceiveProps(nextProps) {
    this.props.variant !== nextProps.variant && console.log(`Variant: ${nextProps.variant}`)
  //this.props.getData(this.props.data.name)
  }

  render() {
    return <Switchers
      {...this.props}
      handleTemp={this.handleTemp}
      temp={this.state.temp}
      handlePeriod={this.handlePeriod}
      />
  }
}