import React from "react";
import PropTypes from "prop-types";

const CalcButton = ({ calc, val, BtnType, handleCalc, handleEval }) => {
  return (
    <>
      {val === "=" ? (
        <button className={`${BtnType}`} onClick={() => handleEval(calc)}>
          {val}
        </button>
      ) : (
        <button className={`${BtnType}`} onClick={() => handleCalc(val)}>
          {val}
        </button>
      )}
    </>
  );
};

export default CalcButton;

CalcButton.propTypes = {
  calc: PropTypes.string,
  val: PropTypes.string,
  BtnType: PropTypes.string,
  handleCalc: PropTypes.func,
  handleEval: PropTypes.func,
};
