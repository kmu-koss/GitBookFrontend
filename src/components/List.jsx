import Tile from "./Tile";
import PropTypes from "prop-types";
/**
 * 센서 정보 리스트
 * @param {object} sensors - 센서 객체
 */
const List = ({ sensors }) => {
  const sensorList = sensors.map((sensor) => (
    <li className="List" key={sensors.indexOf(sensor)}>
      <Tile name={sensor.name} value={sensor.value} />
    </li>
  ));
  return (
    <div>
      <Tile name="센서" value="측정 값" />
      <div>{sensorList}</div>
    </div>
  );
};

List.propTypes = {
  sensors: PropTypes.array,
};

export default List;
