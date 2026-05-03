export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export interface CalculationResult {
  value: number | null;
  error: string | null;
}

export interface OperationDefinition {
  id: Operation;
  symbol: string;
  label: string;
}
