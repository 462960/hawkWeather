import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GitHubIcon } from '../helpers/GitHubIcon';

export const TopBar = () => {
  return (
    <MuiThemeProvider>
					<AppBar
    title="Weather App"
    iconElementRight={<IconButton/>}
    iconElementLeft={<IconButton href="https://github.com/462960/giraffe" target="blank"><GitHubIcon/></IconButton>}
    />
	</MuiThemeProvider>
  )
}