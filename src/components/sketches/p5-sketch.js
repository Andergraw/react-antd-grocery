// React-p5 version (deprecated)

// import React from "react";
// import Sketch from "react-p5";

// function P5Sketch() {
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(500, 400).parent(canvasParentRef);
//   };

//   const draw = (p5) => {
//     p5.background(255, 120, 20);
//     p5.ellipse(100, 100, 100);
//   };

//   return <Sketch setup={setup} draw={draw} />;
// }

// export default P5Sketch;

// P5 P5-wrapper version

// import * as React from "react";
// import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  let slider;
  p5.setup = () => {
    // p5.createCanvas(720, 400, p5.WEBGL); Esto descuadra la creación de la elipse a la esquina inferior derecha
    p5.createCanvas(720, 400);
    p5.colorMode(p5.HSB, 255);
    // p5.translate(-(p5.width / 2), -(p5.height / 2));
    slider = p5.createSlider(0, 255, 127);
  };

  p5.draw = () => {
    p5.background(127);
    p5.strokeWeight(2);
    p5.stroke(slider.value(), 255, 255);
    p5.fill(slider.value(), 255, 255, 127);
    p5.ellipse(360, 200, 200, 200);

    // p5.background(250);
    // p5.normalMaterial();
    // p5.push();
    // p5.rotateZ(p5.frameCount * 0.01);
    // p5.rotateX(p5.frameCount * 0.01);
    // p5.rotateY(p5.frameCount * 0.01);
    // p5.plane(100);
    // p5.pop();
    // p5.box(80, 80, 80);
  };
}
export default sketch;

// export function AppP5() {
//   return <ReactP5Wrapper sketch={sketch} />;
// }
