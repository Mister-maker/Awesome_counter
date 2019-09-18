import React from "react";
// import styles from "./Greeting.module.css";

const Greeting = props => {
  let finalStyle = null;

  if (props.messageCounter == 60) {
    finalStyle = props.showGreeting;
  } else if (props.messageCounter == 70) {
    finalStyle = null;
  } else if (props.messageCounter > 100) {
    finalStyle = props.showGreeting;
  }
  return (
    <div className="message">
      <h1 className={finalStyle}>
        <span>😂</span>
        {props.message}
        <span>😂</span>
      </h1>
    </div>
  );
};

export default Greeting;
