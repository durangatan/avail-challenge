import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  padding: 15px 0;
  align-items: center;
  input {
    zoom: 1.5;
    transform: scale(1.5);
    transform-origin: 0 0;
    margin: 0 10px;
  }
  label {
    font-size: ${({ theme }) => theme.font.size.p};
  }
`;

type CheckboxProps = {
  label: string;
  checked: boolean;
  name: string;
  onChange: (e: any) => void;
};
export default function Checkbox(props: CheckboxProps) {
  const { label, checked, onChange, name } = props;
  return (
    <CheckboxContainer>
      <label>{label}</label>
      <input type="checkbox" checked={checked} onChange={onChange} name={name} />
    </CheckboxContainer>
  );
}
