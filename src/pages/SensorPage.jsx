import "../style/App.css";
import List from "../components/List";
import { useState } from "react";

function SensorPage() {
  const [sensors, setSensors] = useState([
    { name: "bme280", value: 123.45 },
    { name: "pmds7003m", value: 120.03 }
  ]);

  return (
    <div className="sensorPage">
      <h1>sensorPage</h1>
      <List sensors={sensors} />
    </div>
  );
}

export default SensorPage;
