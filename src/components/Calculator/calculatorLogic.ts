import type { CalculationResult, Operation } from '../../types/calculator';

export function calculate(
  a: number,
  b: number,
  operation: Operation,
): CalculationResult {
  switch (operation) {
    case 'add':
      return { value: a + b, error: null };
    case 'subtract':
      return { value: a - b, error: null };
    case 'multiply':
      return { value: a * b, error: null };
    case 'divide':
      if (b === 0) {
        return { value: null, error: 'Deljenje nulom nije dozvoljeno.' };
      }
      return { value: a / b, error: null };
  }
}

export function formatResult(value: number): string {
  if (Number.isInteger(value)) return value.toString();
  return parseFloat(value.toFixed(10)).toString();
}
