import React, { useState } from 'react';
import { Input, Button } from '../../../elements';
import { ApplicantArguments, Applicant } from '../../../../models';
import { FormTag, CanError, FormError } from '../../../elements/form';
import { createApplicant } from '../../../../api';
import { RouteComponentProps } from 'react-router';

type ApplicantRegistrationState = ApplicantArguments & CanError;

export default function ApplicantRegistrationForm({ onCreateApplicant }: { onCreateApplicant: () => void }) {
  const [applicantInfo, setApplicantInfo] = useState<ApplicantRegistrationState>({
    name: '',
    email: ''
  });

  const handleCreateApplicant = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    return createApplicant(new Applicant(applicantInfo))
      .then((applicant: Applicant) => {
        return onCreateApplicant();
      })
      .catch(() => {
        setApplicantInfo({ ...applicantInfo, error: 'Error sending welcome email. Please try again.' });
      });
  };

  return (
    <FormTag>
      <h2>Applicant Registration 👨‍💻</h2>
      <p>
        Enter your name and email here to start the application process. We'll email you a link to the registration
        form.
      </p>
      <Input
        label="name:"
        name="name"
        value={applicantInfo.name}
        type="text"
        onChange={e => setApplicantInfo({ ...applicantInfo, name: e.currentTarget.value })}
        placeholder="John Doe"
      />
      <Input
        label="email:"
        name="email"
        value={applicantInfo.email}
        type="text"
        onChange={e => setApplicantInfo({ ...applicantInfo, email: e.currentTarget.value })}
        placeholder="email@domain.com"
      />
      <Button onClick={handleCreateApplicant} buttonType="action" text="send" />
      {applicantInfo.error ? <FormError message={applicantInfo.error} /> : null}
    </FormTag>
  );
}
