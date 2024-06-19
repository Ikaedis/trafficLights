import "./App.css";
import TrafficLightsComponent from "./components/TrafficLightsComponent";

function App() {
  const simpleArray = [1, 2, 3];
  return (
    <>
      <h1>This text only appears in the testing 1 branch</h1>
      <TrafficLightsComponent arrayToUse={simpleArray} />
    </>
  );
}

export default App;
