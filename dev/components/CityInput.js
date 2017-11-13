import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';

const styles = {
  customWidth: {
    width: '49%',
    float: 'right',
    //border: '1px solid green'
  },
};



export const CityInput = (props) =>
								<form action=""
								onSubmit={props.submitName}
								//ref={props.resetRef}
								>
									<MuiThemeProvider>
										<TextField
										onChange={props.cityName}
										style={styles.customWidth}
										id="field"
										/>
									</MuiThemeProvider>
								<input type="submit"  hidden/>
								</form>

					
							
