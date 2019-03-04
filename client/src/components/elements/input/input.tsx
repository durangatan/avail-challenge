import React from 'react';
import styled from 'styled-components';

type InputProps = {
  label: string;
  value: any;
  type: any;
  name: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  label {
    font-size: ${({ theme }) => theme.font.size.p};
  }
  input {
    width: 100%;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.font.size.p};
  }
`;

export default function Input({ label, value, type, onChange, placeholder, autoComplete }: InputProps) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input value={value} type={type} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} />
    </InputContainer>
  );
}
