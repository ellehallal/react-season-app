import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    description: "It's hot",
    iconName: "sun"
  },
  winter: {
    description: "It's cold",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { description, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} data-test="display-icon" />
      <p data-test="what-season">It's {season}!</p>
      <p data-test="weather-description">{description}</p>
      <i className={`icon-right massive ${iconName} icon`} data-test="display-icon" />
    </div>
  );
};

export default SeasonDisplay;
