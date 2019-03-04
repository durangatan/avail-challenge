import React, { useState, useEffect } from 'react';
import { Table } from '../../elements';
import { getApplicants } from '../../../api';

import { Applicant, ApplicantSortMap } from '../../../models';

export default function ApplicantsTable() {
  const [applicants, setApplicants] = useState<Array<Applicant>>([]);
  useEffect(() => {
    getApplicants().then(applicants => {
      setApplicants(applicants);
    });
  }, []);
  return (
    <React.Fragment>
      <h2>Applicants 👨‍👩‍👧‍👦</h2>
      <Table
        headerRow={[
          { label: 'Name', value: 'name' },
          { label: 'Email', value: 'email' },
          { label: 'Date Of Birth', value: 'dob' },
          { label: 'Employment Status', value: 'employmentStatus' },
          { label: 'Has Pets?', value: 'hasPets' },
          { label: 'Landlord Name', value: 'landlordName' },
          { label: 'Landlord Email', value: 'landlordEmail' }
        ]}
        sortMap={ApplicantSortMap}
        bodyRows={applicants}
        rowTransformer={(applicant: Applicant) => applicant.getValues()}
      />
    </React.Fragment>
  );
}
