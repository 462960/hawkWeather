import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switchers } from 'Components/Switchers';
//import { connect } from 'react-redux';
//import { switchTemp, varia} as actionCreators from '../action/actionCreators';

// function mapStateToProps(state){
//   return {

//   }

// }

// function mapDispatchToProps(dispatch){

// }

export class SwitchersContainer extends React.Component {

  handleTemp = (e, i, temp) => {
    e.preventDefault();
    this.props.switchTemp(temp);
  }

  handlePeriod = (e, i, period) => {
    e.preventDefault();
    this.props.variantData(period);
  }

  render() {
    return <Switchers
      {...this.props}
      handleTemp={this.handleTemp}
      handlePeriod={this.handlePeriod}
      />
  }
}

SwitchersContainer.propTypes = {
  switchTemp: PropTypes.func.isRequired,
  variantData: PropTypes.func.isRequired
}