import "./TrafficLightsComponent.css"; // Importing the CSS file
import { useEffect, useState } from "react";

const lightsConfigs = {
  green: {
    backgroundColor: "green",
    next: "yellow",
  },
  yellow: {
    backgroundColor: "yellow",
    next: "red",
  },
  red: {
    backgroundColor: "red",
    next: "green",
  },
};

const arrayOflightsConfigs = Object.keys(lightsConfigs);

const TrafficLightsComponent = () => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { next } = lightsConfigs[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [currentColor]);

  return (
    <div className="boxes-container">
      {arrayOflightsConfigs.map((currColorConfig, index) => {
        return (
          <div
            key={index.backgroundColor}
            className={"trafficLight"}
            style={{
              backgroundColor:
                currentColor === arrayOflightsConfigs[index]
                  ? currentColor
                  : undefined,
            }}
          >
            {arrayOflightsConfigs[index]}
          </div>
        );
      })}
    </div>
  );
};

export default TrafficLightsComponent;
