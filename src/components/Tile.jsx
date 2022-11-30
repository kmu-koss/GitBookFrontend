import "../style/Tile.css";
import PropTypes from "prop-types";

/**
 * 센서 정보
 * @param {string} name - 센서 이름
 * @param {number} value - 센서 값
 */
const Tile = ({name, value}) => {
  console.log(name, value);
  return (
    <div className="tile">
      <div className="sensor-name">{name}</div>
      <div className="sensor-value">{value}</div>
    </div>
  );
};

Tile.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
}

export default Tile;
