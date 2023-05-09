import "./PrincipalContainer.css";
import { useState } from "react";

const PrincipalContainer = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("ERROR");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-selector">
        <div className="calculator-display">
          <input type="text" value={result} />
        </div>

        <div className="calculator-keypad">
          <button className="calculator-button " id="clear" onClick={clear}>
            {" "}
            Clear
          </button>
          <button
            className="calculator-button"
            id="backspace"
            onClick={backspace}
          >
            {" "}
            C
          </button>
          <button className="calculator-button" name="/" onClick={handleClick}>
            {" "}
            &divide;
          </button>
          <button className="calculator-button" name="7" onClick={handleClick}>
            {" "}
            7
          </button>
          <button className="calculator-button" name="8" onClick={handleClick}>
            {" "}
            8
          </button>
          <button className="calculator-button" name="9" onClick={handleClick}>
            {" "}
            9
          </button>
          <button className="calculator-button" name="*" onClick={handleClick}>
            {" "}
            &times;
          </button>
          <button className="calculator-button" name="4" onClick={handleClick}>
            {" "}
            4
          </button>
          <button className="calculator-button" name="5" onClick={handleClick}>
            {" "}
            5
          </button>
          <button className="calculator-button" name="6" onClick={handleClick}>
            {" "}
            6
          </button>
          <button className="calculator-button" name="-" onClick={handleClick}>
            {" "}
            &ndash;
          </button>
          <button className="calculator-button" name="1" onClick={handleClick}>
            {" "}
            1
          </button>
          <button className="calculator-button" name="2" onClick={handleClick}>
            {" "}
            2
          </button>
          <button className="calculator-button" name="3" onClick={handleClick}>
            {" "}
            3
          </button>
          <button className="calculator-button" name="+" onClick={handleClick}>
            {" "}
            +
          </button>
          <button className="calculator-button" name="0" onClick={handleClick}>
            {" "}
            0
          </button>
          <button className="calculator-button" name="." onClick={handleClick}>
            {" "}
            .
          </button>
          <button className="calculator-button" id="result" onClick={calculate}>
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrincipalContainer;
