import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import LoadingSpinner from "./components/LoadingSpinner";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (location) {
        this.setState({
          lat: location.coords.latitude
        });
      }.bind(this),
      function (err) {
        console.log(err);
        this.setState({
          errorMessage: "Error: Unable to get location"
        });
      }.bind(this)
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <React.Fragment>
          <p data-test="error-message">{this.state.errorMessage}</p>
        </React.Fragment>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <React.Fragment>
          <SeasonDisplay lat={this.state.lat} />
        </React.Fragment>
      );
    }
    return (
      <LoadingSpinner />
    );
  }
}
