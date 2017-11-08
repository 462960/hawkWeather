import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  customWidth: {
    width: '49%',
    float: 'right',
    border: '1px solid green'
  },
};


export const CityInput = (props) =>
						<MuiThemeProvider {...props}>
							<form action=""
							onSubmit={props.submitName}
							//ref={props.resetRef}
							>
								<TextField
									        				hintText="Enter city"
									        				style={styles.customWidth}
									        				onChange={props.cityName}
									        				/>
								<input type="submit"  hidden/>
							</form>
						</MuiThemeProvider>