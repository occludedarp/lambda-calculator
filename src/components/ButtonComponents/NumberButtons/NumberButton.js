import React from "react";

const NumberButton = props => {
  return (
    <button
      className="number_button"
      onClick={() => props.setNumberState(props.numberChar)}
    >
      {props.numberChar}
    </button>
  );
};

export default NumberButton;