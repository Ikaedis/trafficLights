import "./TrafficLightsComponent.css"; // Importing the CSS file
import { useEffect, useState } from "react";

const greenConfig = {
  backgroundColor: "green",
  next: "yellowConfig",
};

const yellowConfig = {
  backgroundColor: "yellow",
  next: "redConfig",
};

const redConfig = {
  backgroundColor: "red",
  next: "greenConfig",
};

const arrayOfLightsConfigs = [greenConfig, yellowConfig, redConfig];

function getConfigByName(configName) {
  switch (configName) {
    case "greenConfig":
      return greenConfig;
    case "yellowConfig":
      return yellowConfig;
    case "redConfig":
      return redConfig;
    default:
      throw new Error("Invalid configuration name");
  }
}

const TrafficLightsComponent = () => {
  const [currentColor, setCurrentColor] = useState(
    arrayOfLightsConfigs[0].backgroundColor
  );

  useEffect(() => {}, [currentColor]);

  return (
    <div className="boxes-container">
      {arrayOfLightsConfigs.map((colorConfig) => {
        return (
          <div
            key={colorConfig.backgroundColor}
            className={"trafficLight"}
            /* style={{
              backgroundColor:
                currentColor ===
                arrayOfLightsConfigs[colorConfig].backgroundColor
                  ? colorConfig.backgroundColor
                  : undefined,
            }} */
          >
            light
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLightsComponent;
