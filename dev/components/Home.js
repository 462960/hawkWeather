import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SwitchersContainer } from '../containers/SwitchersContainer';
import { CityInputContainer } from '../containers/CityInputContainer';
import { ChippoContainer } from '../containers/ChippoContainer';
import { DayContainer } from '../containers/DayContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { TopBar } from './TopBar';
import { ErrorAlert } from './ErrorAlert';



export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    (this.props.data !== nextProps.data) && this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div className="wrapper">
      <ErrorBoundary>
        <TopBar/>
        <ErrorAlert error = {this.props.error}/>
        <div className="controls-wrapper">
          <SwitchersContainer {...this.props}/>
          <CityInputContainer {...this.props}/>
          <ChippoContainer {...this.props}/>
        </div>
        {this.state.isLoading ?
        <div className="loader"><img  src={'./dev/images/Loading.gif'} alt="Loading"/></div>
        : <DayContainer {...this.props}/>}
      </ErrorBoundary>
    </div>
    )
  }
}


