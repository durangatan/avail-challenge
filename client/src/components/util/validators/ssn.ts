import { Validator } from './';

export const validateSSN = (message?: string): Validator => (value: string): string | null => {
  const SSNRegex = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
  if (!SSNRegex.test(value)) {
    return message || 'Please enter a valid Social Security Number.';
  }
  return null;
};
