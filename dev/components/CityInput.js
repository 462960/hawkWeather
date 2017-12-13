import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';


export const CityInput = (props) => <form action="post" className="city-input"
  onSubmit={props.submitName}
  ref={props.resetRef}
  >
                 <MuiThemeProvider>
                   <TextField
  onChange={props.cityName}
  name="city"
  />
                 </MuiThemeProvider>
               <input type="submit"  hidden/>
               </form>


