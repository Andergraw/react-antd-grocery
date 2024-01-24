import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import AppSlider from "../components/common/slider";
import { ReactP5Wrapper } from "@p5-wrapper/react";
// import sketch from "../components/sketches/p5-sketch";
// import sketch from "../components/sketches/box";
// import { sketch } from "../components/sketches/controlledBox";
import controlledSketch from "../components/sketches/controlledBox";
// import * as box from "../components/sketches/box";

function AppP5() {
  const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value) => {
      if (isNaN(value)) {
        return;
      }
      setInputValue(value);
      console.log(value);
    };
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{
              margin: "0 16px",
            }}
            step={0.01}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    );
  };

  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  const [state, setState] = useState({
    rotation: 260,
  });
  const onRotationChange = useCallback((event) => {
    console.log("rotation");
    setState((state) => ({
      ...state,
      rotation: parseInt(event.target.value, 10),
    }));
  });
  return (
    <>
      <div className="containerP5">
        <controlledSketch />
        <div className="sketch">
          {
            // <Slider
            //   min={0}
            //   max={1}
            //   onChange={onRotationChange}
            //   value={inputValue}
            //   step={0.01}
            // />
            /* <AppSlider
            defaultValue={state.rotation}
            min={0}
            max={360}
            step={1}
            onChange={onRotationChange}
          /> */
          }
          {/* <controlledSketch /> */}
          <AppSlider />
          {/* <ReactP5Wrapper sketch={controlledSketch} rotation={state.rotation} /> */}
        </div>
      </div>
    </>
  );
}
export default AppP5;
