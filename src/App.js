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
          errorMessage: "Error: Unable to get location"
        });
      }.bind(this)
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return (
        <React.Fragment>
          <p data-test="error-message">{this.state.errorMessage}</p>
        </React.Fragment>
      );
    }

    if (this.state.lat && this.state.lon && !this.state.errorMessage) {
      return (
        <React.Fragment>
          <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
        </React.Fragment>
      );
    }
    return (
      <div className="App">
        <p data-test="loading">Loading ...</p>
      </div>
    );
  }
}
