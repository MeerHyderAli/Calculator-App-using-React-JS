import React from "react";
import styles from "./CalculatorDisplay.module.css";
const CalculatorDisplay = ({ displayValue }) => {
  return (
    <div className="d-flex justify-content-center my-2">
      <input
        className={` ${styles?.calInput}`}
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default CalculatorDisplay;
