import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SwitchersContainer } from '../containers/SwitchersContainer';
import { CityInputContainer } from '../containers/CityInputContainer';
import { ChippoContainer } from '../containers/ChippoContainer';
import { PresentContainer } from '../containers/PresentContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { TopBar } from './TopBar';
import { ErrorAlert } from './ErrorAlert';



export class Home extends React.Component {

  render() {
    return (
      <div className="wrapper">
      <ErrorBoundary>
        <TopBar/>
        <ErrorAlert error = {this.props.error}/>
        <div className="controls-wrapper">
          <div className="inputs-wrapper">
            <SwitchersContainer {...this.props}/>
            <CityInputContainer {...this.props}/>
          </div>
          <ChippoContainer {...this.props}/>
        </div>
         <PresentContainer {...this.props}/>
      </ErrorBoundary>
    </div>
    )
  }
}


