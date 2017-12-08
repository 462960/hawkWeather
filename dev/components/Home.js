import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SwitchersContainer } from '../containers/SwitchersContainer';
import { CityInputContainer } from '../containers/CityInputContainer';
import { ChippoContainer } from '../containers/ChippoContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { TopBar } from './TopBar';


export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
    	<ErrorBoundary>
    		<TopBar/>
    		<div className="controls-wrapper">
    			<SwitchersContainer {...this.props}/>
    			<CityInputContainer {...this.props}/>
    			<ChippoContainer {...this.props}/>
    		</div>
    	</ErrorBoundary>
    </div>
    )
  }
}


