import React from 'react';
import { CityInput } from '../components/CityInput';


export class CityInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cityName = this.cityName.bind(this);
    this.submitName = this.submitName.bind(this);

  }

  //       componentDidMount() {
  //       let lat, lon;
  //       let bon = true;
  //     navigator.geolocation.getCurrentPosition(function(loc) {
  //         lat = loc.coords.latitude;
  //         lon = loc.coords.longitude;
  // });
  //   setTimeout(() => {
  //    this.setState({
  //      lat,
  //      lon
  //    })
  //    console.log(this.state.lat, this.state.lon, bon);
  //    this.props.getUserDetails(`${this.state.lat}&lon=${this.state.lon}`)
  // }, 1000);

  //     }

  // componentDidMount() {
  //   let lat,
  //     lon;
  //   navigator.geolocation.getCurrentPosition(loc => {
  //     this.setState({
  //       lat: loc.coords.latitude,
  //       lon: loc.coords.longitude
  //     });
  //   });
  //   setTimeout(() => {
  //     console.log(this.state.lon, this.state.lat);
  //     this.props.getUserDetails(`${this.state.lat}&lon=${this.state.lon}`)
  //   }, 1000);
  // }


  //--------------------------
  cityName(e) {
    this.setState({
      city: e.target.value
    })
  //console.log(this.state.city);
  //this.resetRef.reset();
  }

  //getCoords(lat, lng){console.log(lat,lng)}

  submitName(e) {
    e.preventDefault();
    this.props.getData(this.state.city);
    console.log('I am city submit', this.state.city);
    //console.log(lat,lng)
    this.resetForm.reset();
  }

  render() {
    return <CityInput
      cityName={this.cityName}
      resetRef={el => this.resetForm = el}
      submitName={this.submitName}
      />

  }
}

