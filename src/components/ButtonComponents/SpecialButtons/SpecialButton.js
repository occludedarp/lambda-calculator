import React from "react";

const SpecialButton = props => {
  return (
    <button
      className="special_button"
      onClick={() => props.setSpecialsState(props.specialChar)}
    >
      {props.specialChar}
    </button>
  );
};

export default SpecialButton;
