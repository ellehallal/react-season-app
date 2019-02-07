import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );

  return (
    <div className="App">
      <SeasonDisplay />
    </div>
  );
};

export default App;
