import React, { useState, useRef, useEffect } from 'react';
import styles from "./App.module.css";

const App = () => {
  // State to manage the display value of the calculator
  const [displayValue, setDisplayValue] = useState("");

  // Reference to the input element for focusing
  const inputRef = useRef(null);

  // Function to handle button clicks
  const handleBtnClick = (value) => {
    setDisplayValue((preValue) => preValue + value);
  };

  // Function to handle keydown events
  const handleKeyDown = (event) => {
    const keyValue = event.key;

    if (/[0-9.+\-*/%]/.test(keyValue)) {
      // Allow only valid characters
      setDisplayValue((prevValue) => prevValue + keyValue);
    } else if (keyValue === 'Enter') {
      // Handle Enter key as '='
      equalBtnClick();
      event.preventDefault();
    } else if (keyValue === 'Backspace') {
      // Handle Backspace key as 'DE'
      handleDeClick();
    } else if (keyValue === 'Escape') {
      // Handle Escape key as 'AC'
      handleAcClick();
    }
  };

  // Function to handle 'AC' button click
  const handleAcClick = () => {
    setDisplayValue("");
  };

  // Function to handle 'DE' button click
  const handleDeClick = () => {
    setDisplayValue((preValue) => preValue.slice(0, -1));
  };

  // Function to handle '=' button click
  const equalBtnClick = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  // Function to always focus on the input element
  const alwaysFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <div className={styles.container} onClick={alwaysFocus}>
        <form>
          <div className={styles.display}>
            {/* Input element displaying the calculator's display value */}
            <input type="text" name="display" ref={inputRef} autoFocus value={displayValue} onChange={() => { }}
              onKeyDown={handleKeyDown} />
          </div>

          <div className={styles.buttons}>
            {/* Calculator buttons */}
            <input
              type="button"
              value="AC"
              onClick={handleAcClick}
              className={styles.operator}
            />
            <input
              type="button"
              value="DE"
              onClick={handleDeClick}
              className={styles.operator}
            />
            <input
              type="button"
              value="."
              onClick={() => handleBtnClick(".")}
              className={styles.operator}
            />
            <input
              type="button"
              value="/"
              onClick={() => handleBtnClick("/")}
              className={styles.operator}
            />

            <input type="button" value="7" onClick={() => handleBtnClick("7")} />
            <input type="button" value="8" onClick={() => handleBtnClick("8")} />
            <input type="button" value="9" onClick={() => handleBtnClick("9")} />
            <input type="button" value="*" onClick={() => handleBtnClick("*")} />

            <input type="button" value="4" onClick={() => handleBtnClick("4")} />
            <input type="button" value="5" onClick={() => handleBtnClick("5")} />
            <input type="button" value="6" onClick={() => handleBtnClick("6")} />
            <input type="button" value="-" onClick={() => handleBtnClick("-")} />

            <input type="button" value="1" onClick={() => handleBtnClick("1")} />
            <input type="button" value="2" onClick={() => handleBtnClick("2")} />
            <input type="button" value="3" onClick={() => handleBtnClick("3")} />
            <input type="button" value="+" onClick={() => handleBtnClick("+")} />

            <input type="button" value="00" onClick={() => handleBtnClick("00")} />
            <input type="button" value="0" onClick={() => handleBtnClick("0")} />
            <input type="button" value="%" onClick={() => handleBtnClick("%")} />
            <input
              type="button"
              value="="
              onClick={equalBtnClick}
              className={styles.equal}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
