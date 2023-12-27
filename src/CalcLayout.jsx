import React from "react";
import CalcButton from "./CalcButton";
import PropTypes from "prop-types";

const CalcLayout = ({
  handleCalc,
  handleEval,
  calc,
  handleAC,
  handleIntVal,
}) => {
  return (
    <>
      <button className="btn-gray" onClick={() => handleAC()}>
        AC
      </button>
      <button className="btn-gray text-2xl" onClick={() => handleIntVal()}>
        +/-
      </button>
      <CalcButton val="%" BtnType="btn-gray" handleCalc={handleCalc} />
      <CalcButton val="/" BtnType="btn-gray" handleCalc={handleCalc} />
      <CalcButton val="7" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="8" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="9" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="x" BtnType="btn-gray" handleCalc={handleCalc} />
      <CalcButton val="4" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="5" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="6" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="-" BtnType="btn-gray" handleCalc={handleCalc} />
      <CalcButton val="1" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="2" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="3" BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton val="+" BtnType="btn-gray" handleCalc={handleCalc} />
      <CalcButton
        val="0"
        BtnType="btn-white col-span-2"
        handleCalc={handleCalc}
      />
      <CalcButton val="." BtnType="btn-white" handleCalc={handleCalc} />
      <CalcButton
        val="="
        BtnType="btn-gray"
        calc={calc}
        handleEval={handleEval}
      />
    </>
  );
};

export default CalcLayout;

CalcButton.propTypes = {
  calc: PropTypes.string,
  handleCalc: PropTypes.func,
  handleEval: PropTypes.func,
  handleIntVal: PropTypes.func,
};
