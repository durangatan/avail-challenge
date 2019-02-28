import React from 'react';
import styled from 'styled-components';

type InputProps = {
  label: string;
  value: any;
  type: any;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Input({ label, value, type, onChange }: InputProps) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input value={value} type={type} onChange={onChange} />
    </InputContainer>
  );
}
