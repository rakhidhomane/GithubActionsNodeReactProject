// frontend/src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState(null);

    const calculate = async (operation) => {
        const response = await fetch(`http://localhost:5000/api/${operation}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ a: Number(a), b: Number(b) }),
        });
        const data = await response.json();
        setResult(data.result || data.error);
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <div>
                <button onClick={() => calculate('add')}>Add</button>
                <button onClick={() => calculate('subtract')}>Subtract</button>
                <button onClick={() => calculate('multiply')}>Multiply</button>
                <button onClick={() => calculate('divide')}>Divide</button>
            </div>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default Calculator;
