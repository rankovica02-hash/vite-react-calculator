import { useState } from 'react';
import type {
  CalculationResult,
  Operation,
  OperationDefinition,
} from '../../types/calculator';
import { calculate, formatResult } from './calculatorLogic';
import './Calculator.css';

const OPERATIONS: OperationDefinition[] = [
  { id: 'add', symbol: '+', label: 'Saberi' },
  { id: 'subtract', symbol: '−', label: 'Oduzmi' },
  { id: 'multiply', symbol: '×', label: 'Pomnoži' },
  { id: 'divide', symbol: '÷', label: 'Podeli' },
];

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [activeOperation, setActiveOperation] = useState<Operation | null>(null);

  const handleCalculate = (operation: Operation) => {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    setActiveOperation(operation);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult({
        value: null,
        error: 'Unesite validne brojeve u oba polja.',
      });
      return;
    }

    setResult(calculate(a, b, operation));
  };

  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
    setActiveOperation(null);
  };

  return (
    <div className="calc-card">
      <header className="calc-header">
        <span className="calc-eyebrow">Mini Calculator</span>
        <h1 className="calc-title">Kalkulator</h1>
        <p className="calc-subtitle">
          Sabiranje, oduzimanje, množenje, deljenje
        </p>
      </header>

      <div className="calc-inputs">
        <div className="field">
          <label htmlFor="first">Prvi broj</label>
          <input
            id="first"
            type="number"
            inputMode="decimal"
            placeholder="npr. 12"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="second">Drugi broj</label>
          <input
            id="second"
            type="number"
            inputMode="decimal"
            placeholder="npr. 4"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="calc-ops">
        {OPERATIONS.map((op) => (
          <button
            key={op.id}
            type="button"
            className={`op-btn ${activeOperation === op.id ? 'is-active' : ''}`}
            onClick={() => handleCalculate(op.id)}
          >
            <span className="op-btn__symbol">{op.symbol}</span>
            <span className="op-btn__label">{op.label}</span>
          </button>
        ))}
      </div>

      {result !== null && (
        <div
          className={`calc-result ${result.error ? 'is-error' : 'is-success'}`}
          role="status"
          aria-live="polite"
        >
          {result.error ? (
            <p className="calc-result__error">{result.error}</p>
          ) : (
            <>
              <span className="calc-result__label">Rezultat</span>
              <p className="calc-result__value">
                {formatResult(result.value as number)}
              </p>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        className="reset-btn"
        onClick={handleReset}
      >
        Resetuj
      </button>
    </div>
  );
}
