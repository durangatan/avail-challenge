import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;

  input {
    zoom: 2;
    transform: scale(2);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2);
    -moz-transform: scale(2);
    transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
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
      <input type="checkbox" checked={checked} onChange={onChange} name={name} />;
    </CheckboxContainer>
  );
}
