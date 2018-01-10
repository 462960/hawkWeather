
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    error: state.errorReducer
  }
}


const ErrorAlert = ({error}) => <MuiThemeProvider>
          <Dialog
  open={error}
  >
            <h4>Sorry, request delay...</h4>
            <p>Slow Internet connection or spelling may cause it </p>
          </Dialog>
        </MuiThemeProvider>

export default connect(mapStateToProps)(ErrorAlert);


ErrorAlert.propTypes = {
  error: PropTypes.bool.isRequired
}





