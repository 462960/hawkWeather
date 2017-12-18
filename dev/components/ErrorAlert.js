
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export const ErrorAlert = ({error}) => <MuiThemeProvider>
          <Dialog
  open={error}
  >
            <h4>Sorry, request failed...</h4>
            <p>Check your Internet connection or spelling </p>
          </Dialog>
        </MuiThemeProvider>


ErrorAlert.propTypes = {
  error: PropTypes.bool
}





