import { Validator } from './';

export const validateEmail = (message?: string): Validator => (value: string): string | null => {
  const emailRegex = /^([\w.+-]+)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (!emailRegex.test(value)) {
    return message || 'Value is not an email.';
  }
  return null;
};
