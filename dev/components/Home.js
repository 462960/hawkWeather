import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SwitchersContainer } from 'Containers/SwitchersContainer';
import { CityInputContainer } from 'Containers/CityInputContainer';
import { ChippoContainer } from 'Containers/ChippoContainer';
import { PresentContainer } from 'Containers/PresentContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { TopBar } from './TopBar';
import ErrorAlert from './ErrorAlert';



export const Home = (props) => <div className="wrapper">
      <ErrorBoundary>
        <TopBar/>
        <ErrorAlert/>
        <div className="controls-wrapper">
          <div className="inputs-wrapper">
            <SwitchersContainer {...props}/>
            <CityInputContainer {...props}/>
          </div>
          <ChippoContainer {...props}/>
        </div>
         <PresentContainer {...props}/>
      </ErrorBoundary>
    </div>

