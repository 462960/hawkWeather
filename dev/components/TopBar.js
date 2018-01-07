
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { GitHubIcon } from './GitHubIcon';

export const TopBar = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
					<AppBar
    title="Weather App"
    iconElementRight={<IconButton/>}
    iconElementLeft={<IconButton href="https://github.com/462960/hawkWeather" target="blank"><GitHubIcon/></IconButton>}
    />
	</MuiThemeProvider>
  )
}
