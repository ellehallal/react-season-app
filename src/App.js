import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return (
      <div className="App">
        Latitude
        <SeasonDisplay />
      </div>
    );
  }
}
