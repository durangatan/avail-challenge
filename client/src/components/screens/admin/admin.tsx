import React, { ReactNode, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Main } from '../../page';
import { Applicant, Admin } from '../../../models';
import { Table } from '../../elements';
import { getApplicants } from '../../../api';
import { AdminSettingsForm } from './';
type AdminScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  setSession: (admin: Admin | null) => void;
} & RouteComponentProps;

export default function AdminScreen({ setSession }: AdminScreenProps) {
  const [applicants, setApplicants] = useState<Array<Applicant>>([]);

  useEffect(() => {
    getApplicants().then(applicants => {
      setApplicants(applicants);
    });
  }, []);

  return (
    <Main>
      <h1>Admin 🛠</h1>
      <AdminSettingsForm setSession={setSession} />
      <h2>Applicants 👨‍👩‍👧‍👦</h2>
      <Table
        rows={[
          [
            'Name',
            'Email',
            'Date Of Birth',
            'Employment Status',
            'Has Pets?',
            'Landlord Name',
            'Landlord Email',
          ],
          ...applicants.map(applicant => applicant.getValues())
        ]}
      />
    </Main>
  );
}
