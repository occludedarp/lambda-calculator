import React from "react";
/* Display a button element rendering the data being passed down from the parent container on props */
const OperatorButton = props => {
  return (
    <button
      className="operator_button"
      onClick={() => props.setOperatorState(props.operatorValue)}
    >
      {props.operatorChar}
    </button>
  );
};

export default OperatorButton;
