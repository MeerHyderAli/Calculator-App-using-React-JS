import styles from "./CalculatorButton.module.css";
const CalculatorButton = ({ buttonNames, onButtonClick }) => {
  return (
    <div className={`${styles?.buttonContainer}`}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={`${styles?.calButton}`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default CalculatorButton;
