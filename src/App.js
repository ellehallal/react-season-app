import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

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
          errorMessage: "Unable to get location"
        });
      }.bind(this)
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <React.Fragment>
          <p data-test="error-message"></p>
          <ErrorMessage message={this.state.errorMessage} />
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
      <LoadingSpinner message="Please accept location request" />
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderContent()}
      </div>
    )
  }
}
