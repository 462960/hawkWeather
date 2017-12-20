import React from 'react';


export class WeekContainer extends React.Component {
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
      <div>
    	{this.state.isLoading ?
        <div className="loader"><img  src={'./dev/images/Loading.gif'} alt="Loading"/></div>
        : <div>I am WeekContainer{this.props.data.city.name}</div>}
    	</div>
    )
  }
}