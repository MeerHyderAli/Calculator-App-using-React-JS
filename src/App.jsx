import { useState } from "react";
import "./App.css";
import CalculatorButton from "./components/calculatorButtons/CalculatorButton";
import CalculatorDisplay from "./components/calculatorDisplay/calculatorDisplay";

function App() {
  const [calValue, setCalValue] = useState("");
  let buttonNames = [
    "C",
    "←",
    "1",
    "+",
    "2",
    "3",
    "-",
    "4",
    "5",
    "*",
    "6",
    "7",
    "/",
    "8",
    "9",
    "0",
    "=",
    ".",
  ];

  const onButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      setCalValue("");
    } else if (buttonValue === "←") {
      setCalValue((prev) => prev.slice(0, -1));
    } else if (buttonValue === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonValue;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className="mainContainer">
      <div className="calculatorContainer">
        <CalculatorDisplay displayValue={calValue} />
        <CalculatorButton
          buttonNames={buttonNames}
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  );
}

export default App;
