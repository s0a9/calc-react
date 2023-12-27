import React from "react";
import { useState } from "react";
import CalcLayout from "./CalcLayout";

function App() {
  const [calc, setCalc] = useState("");

  const handleCalc = (val) => {
    setCalc((prev) => prev + val);
  };

  const handleEval = (calc) => {
    const sanitizedCalc = calc.replace(/x/g, "*");
    try {
      const evaluate = new Function(`return (${sanitizedCalc})`);
      const result = evaluate();
      setCalc(result);
    } catch (error) {
      console.error("Error evaluating expression:", error);
    }
  };

  const handleIntVal = () => {
    const calcInt = Number(calc) * -1;
    setCalc(calcInt);
  };

  const handleAC = () => {
    setCalc("");
  };

  return (
    <div className="h-screen bg-[#1D283A]">
      <div className="flex flex-col flex-nowrap h-full items-center justify-center">
        <section className="text-white text-5xl mb-5 w-6/12 md:w-5/12 lg:w-4/12 text-right">
          <p className="p-2">{calc}</p>
        </section>
        <main className="grid grid-cols-4 text-center font-bold text-white text-3xl w-8/12 md:w-5/12 lg:w-4/12">
          <CalcLayout
            setCalc={setCalc}
            handleCalc={handleCalc}
            handleEval={handleEval}
            calc={calc.toString()}
            handleAC={handleAC}
            handleIntVal={handleIntVal}
          />
        </main>
      </div>
    </div>
  );
}

export default App;

{
  /*      
          <button className="btn-gray">AC</button>
          <button className="btn-gray text-2xl">+/-</button>
          <button className="btn-gray">%</button>
          <button className="btn-gray">/</button>
          <button className="btn-white">7</button>
          <button className="btn-white">8</button>
          <button className="btn-white">9</button>
          <button className="btn-gray">x</button>
          <button className="btn-white">4</button>
          <button className="btn-white">5</button>
          <button className="btn-white">6</button>
          <button className="btn-gray">-</button>
          <button className="btn-white">1</button>
          <button className="btn-white">2</button>
          <button className="btn-white">3</button>
          <button className="btn-gray">+</button>
          <button className="btn-white col-span-2">0</button>
          <button className="btn-white">.</button>
          <button className="btn-gray">=</button> 
    */
}
