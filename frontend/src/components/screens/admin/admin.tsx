import React, { ReactNode, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Main } from '../../page';
import { Applicant } from '../../../models';
import { Table } from '../../elements';
import { getApplicants } from '../../../api';
type AdminScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
} & RouteComponentProps;

export default function Admin(props: AdminScreenProps) {
  const [applicants, setApplicants] = useState<Array<Applicant>>([]);
  useEffect(() => {
    getApplicants().then(applicants => {
      setApplicants(applicants);
    });
  }, []);

  return (
    <Main>
      <h1>Applicants 👨‍👩‍👧‍👦</h1>
      <Table
        rows={[
          ['Name', 'Email', 'D.O.B', 'Employment Status', 'Has Pets?', 'Landlord Name', 'Landlord Email', 'Submitted?'],
          ...applicants.map(applicant => applicant.getValues())
        ]}
      />
    </Main>
  );
}
