import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  font: inherit;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: fow;
  justify-content: center;
  align-items: center;
`;

const Option = styled.option`
  text-align: center;
`;

export type SelectOption = {
  label: string;
  value: any;
};

type DropdownProps = {
  activeIndex: number;
  options: Array<SelectOption>;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
  name: string;
};

export default function Dropdown({ activeIndex, options, onChange, name }: DropdownProps) {
  return (
    <DropdownContainer>
      <label>{name}</label>
      <Select
        name={name}
        value={options.length && options[activeIndex] ? options[activeIndex].value : 0}
        onChange={onChange}
      >
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </DropdownContainer>
  );
}
