
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

export const PeriodSwitch = (props) => (
  
    <div style={{
    	float: 'right',
    	width: '49%'
  		}}>
    <MuiThemeProvider>
      <RadioButtonGroup name="shipSpeed" labelPosition="left" defaultSelected="not_light">
        <RadioButton
          value="light"
          label="Today"
          style={styles.radioButton}
        />
        <RadioButton
          value="not_light"
          label="Tomorrow"
          style={styles.radioButton}
        />
        <RadioButton
          value="week"
          label="Week"
          style={styles.radioButton}
        />
        <RadioButton
          value="2_weeks"
          label="2 Weeks"
          style={styles.radioButton}
        />
       {/* <RadioButton
          value="ludicrous"
          label="Custom icon"
          checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
          uncheckedIcon={<ActionFavoriteBorder />}
          style={styles.radioButton}
        />*/}
      </RadioButtonGroup>
      {/*<RadioButtonGroup name="shipName" defaultSelected="community">
        <RadioButton
          value="enterprise"
          label="Disabled unchecked"
          disabled={true}
          style={styles.radioButton}
        />
        <RadioButton
          value="community"
          label="Disabled checked"
          disabled={true}
          style={styles.radioButton}
        />
      </RadioButtonGroup>
      <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
        <RadioButton
          value="reverse"
          label="Label on the left"
          style={styles.radioButton}
        />
      </RadioButtonGroup>*/}
      </MuiThemeProvider>
    </div>
  
);

