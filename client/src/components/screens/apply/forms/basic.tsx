import React from 'react';
import { Input, Dropdown, Checkbox } from '../../../elements';
import { SelectOption } from '../../../elements/dropdown/dropdown';
import { ApplicantArguments } from '../../../../models/Applicant';
import { FormError } from '../../../elements/form';

export default function BasicFormQuestions({
  applicant,
  error,
  onChange
}: {
  applicant: ApplicantArguments;
  error?: string;
  onChange: (stateUpdate: any) => void;
}) {
  const employmentOptions = [{ label: 'Employed', value: 'Employed' }, { label: 'Unemployed', value: 'Unemployed' }];
  let activeEmploymentIndex = employmentOptions.findIndex(
    (option: SelectOption) => option.value === applicant.employmentStatus
  );
  return (
    <React.Fragment>
      <h2>Your Info 🙋‍♀️</h2>
      <h4>Tell us a little about yourself.</h4>
      <Input
        label="email:"
        type="text"
        name="email"
        placeholder="email"
        value={applicant.email}
        onChange={e => onChange({ ...applicant, email: e.currentTarget.value })}
      />
      <Input
        label="name:"
        type="text"
        name="name"
        placeholder="Jane Doe"
        value={applicant.name}
        onChange={e => onChange({ ...applicant, name: e.currentTarget.value })}
      />
      <Input
        label="Date Of Birth"
        type="date"
        name="dob"
        value={applicant.dob}
        onChange={e => onChange({ ...applicant, dob: e.currentTarget.value })}
      />
      <Dropdown
        activeIndex={activeEmploymentIndex}
        name="Employment Status"
        options={employmentOptions}
        onChange={e => onChange({ ...applicant, employmentStatus: e.currentTarget.value })}
      />
      <Checkbox
        checked={Boolean(applicant.hasPets)}
        onChange={e => onChange({ ...applicant, hasPets: !applicant.hasPets })}
        name="hasPets"
        label="Have any pets?"
      />
      {error ? <FormError message={error} /> : null}
    </React.Fragment>
  );
}
