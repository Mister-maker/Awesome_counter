import React from "react";
import Button from "./buttons/Button";
import Aux from "../../hoc/Auxilery";
import Dogs from "../assets/dogs.jpg";

const Counter = props => {
  let styleColor = "blue";

  if (props.counterClock > 50) {
    styleColor = "rgb(231, 12, 96)";
  }

  let borderClock = (props.counterClock * 20) / 5;
  let buttonRender = null;

  if (props.counterClock > 100) {
    buttonRender = null;
  } else {
    buttonRender = [
      <Button clicked={props.click}>+</Button>,
      <Button clicked={props.removeCounter}>-</Button>
    ];
  }
  return (
    <div>
      {props.finalMessage ? (
        <Aux>
          <h1 className="hurray">
            <span>❤️</span>Hurray!!<span>❤️</span>
          </h1>
          <span>
            <img src={Dogs} />
          </span>
        </Aux>
      ) : (
        <h1 className="clock" style={{ color: styleColor }}>
          {props.counterClock}
          <svg
            width="160"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            style={{ strokeDashoffset: borderClock }}
          >
            <g>
              <title>Layer 1</title>
              <circle
                id="circle"
                class="circle_animation"
                r="69.85699"
                cy="81"
                cx="81"
                fill="none"
              />
            </g>
          </svg>
        </h1>
      )}
      {buttonRender} {/* Counter buttons */}
    </div>
  );
};

export default Counter;
