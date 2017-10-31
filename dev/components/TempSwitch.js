
import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export const TempSwitch = () => (
  
    <div style={{
      float: 'left',
      width: '49%'
    }}>
    <MuiThemeProvider>
      <RadioButtonGroup name="shipSpeed" defaultSelected="c">
        <RadioButton
          value="f"
          label="F"
          style={styles.radioButton}
        />
        <RadioButton
          value="c"
          label="C"
          style={styles.radioButton}
        />
      </RadioButtonGroup>
      </MuiThemeProvider>
    </div>
  
);

