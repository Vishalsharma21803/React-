import React, { useState } from 'react';
import './cal.css'; // Importing CSS file

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input)); // Note: eval can be dangerous, use with caution
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <h1 className="title">Calculator</h1>
            <div className="display-container">
                <input type="text" value={input} readOnly className="display" />
                <button onClick={handleClear} className="button clear">C</button>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('1')} className="button">1</button>
                <button onClick={() => handleClick('2')} className="button">2</button>
                <button onClick={() => handleClick('3')} className="button">3</button>
                <button onClick={() => handleClick('+')} className="button operator">+</button>
                <button onClick={() => handleClick('4')} className="button">4</button>
                <button onClick={() => handleClick('5')} className="button">5</button>
                <button onClick={() => handleClick('6')} className="button">6</button>
                <button onClick={() => handleClick('-')} className="button operator">-</button>
                <button onClick={() => handleClick('7')} className="button">7</button>
                <button onClick={() => handleClick('8')} className="button">8</button>
                <button onClick={() => handleClick('9')} className="button">9</button>
                <button onClick={() => handleClick('*')} className="button operator">*</button>
                <button onClick={() => handleClick('0')} className="button zero">0</button>
                <button onClick={() => handleClick('.')} className="button">.</button>
                <button onClick={handleCalculate} className="button operator">=</button>
                <button onClick={() => handleClick('/')} className="button operator">/</button>
            </div>
            <div className="result">
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
};

export default Calculator;