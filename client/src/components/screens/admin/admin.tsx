import React, { ReactNode, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Main } from '../../page';
import { Applicant, Admin } from '../../../models';
import { Table, Button } from '../../elements';
import { getApplicants, logout } from '../../../api';
type AdminScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  setSession: (admin: Admin | null) => void;
} & RouteComponentProps;

const LogoutButtonContainer = styled.nav`
  display: flex;
  align-items: flex-end;
`;

export default function AdminScreen(props: AdminScreenProps) {
  const [applicants, setApplicants] = useState<Array<Applicant>>([]);
  useEffect(() => {
    getApplicants().then(applicants => {
      setApplicants(applicants);
    });
  }, []);

  return (
    <Main>
      <LogoutButtonContainer>
        <Button onClick={() => props.setSession(null)} text="log out" buttonType="action" />
      </LogoutButtonContainer>
      <h1>Applicants 👨‍👩‍👧‍👦</h1>
      <Table
        rows={[
          [
            'Name',
            'Email',
            'D.O.B',
            'Employment Status',
            'Has Pets?',
            'Landlord Name',
            'Landlord Email',
            'Has Secrets?'
          ],
          ...applicants.map(applicant => applicant.getValues())
        ]}
      />
    </Main>
  );
}
