// Slider.js
import React from "react";

const Slider = ({ rotation, onSliderChange }) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="PI"
        step="0.01"
        value={rotation}
        onChange={onSliderChange}
      />
    </div>
  );
};

export default Slider;
