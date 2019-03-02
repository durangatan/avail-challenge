import { Validator } from './';

export const validatePassword = (message?: string): Validator => (value: string): string | null => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(value)) {
    return (
      message || 'Passwords must be at least 8 characters in length and include at least one letter and one number.'
    );
  }
  return null;
};
