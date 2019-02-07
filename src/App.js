import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function(location) {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        });
      }.bind(this),
      function(err) {
        console.log(err);
        this.setState({
          errorMessage: "Unable to get location"
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="App">
        <p data-test="latitude">Latitude: {this.state.lat}</p>
        <p data-test="longitude">Longitude: {this.state.lon}</p>
        <p data-test="error-message">{this.state.errorMessage}</p>
        <SeasonDisplay />
      </div>
    );
  }
}
