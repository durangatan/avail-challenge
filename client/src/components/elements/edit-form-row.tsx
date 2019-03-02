import React from 'react';
import styled from 'styled-components';
import { Dropdown, Input } from './';

const FormRowContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
type EditFormRowProps = {
  exercises: Array<any>;
  routineSet: any;
  updateRoutineSets: (routineSetId: number, attrs: any) => void;
};

export default function EditFormRow({ exercises, routineSet, updateRoutineSets }: EditFormRowProps) {
  return <FormRowContainer />;
}
