import React from "react";
import PropTypes from "prop-types";

import "./style.css";

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  solved,
  height,
  width,
  disabled,
  level
}) {
  // console.log("params", level);

  return (
    <div
      className={`flip-container ${flipped ? `flipped` : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          alt="hi"
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={
            flipped || solved
              ? `/img/${level}/${type}.jpg`
              : `/img/${level}/back.jpg`
          }
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired
};
