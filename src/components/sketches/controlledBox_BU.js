import React, { useState } from "react";
export function sketch(p5) {
  const [rotation, setRotation] = React.useState(0);

  p5.setup = () => p5.createCanvas(300, 300, p5.WEBGL);

  p5.updateWithProps = (props) => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
      console.log("Rotation: ", rotation);
    } else console.log("Not rotation");
  };

  p5.draw = () => {
    p5.background(100);
    p5.normalMaterial();
    p5.noStroke();

    p5.push();
    p5.translate(-35, 0);
    p5.rotateY(rotation);
    p5.rotateX(-0.9);
    p5.box(100);
    p5.pop();
  };
  const handleSliderChange = (event) => {
    setRotation(event.target.value);
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="PI"
        step="0.01"
        value={rotation}
        onChange={handleSliderChange}
      />
    </div>
  );
}
