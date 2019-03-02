import React from 'react';
import { Input } from '../../../elements/input';
import { FormError } from '../../../elements/form';
import { LandlordArguments } from '../../../../models/Landlord';
export default function LandlordFormQuestions({
  landlord,
  error,
  onChange
}: {
  landlord: LandlordArguments;
  error?: string;
  onChange: (e: any) => void;
}) {
  return (
    <React.Fragment>
      <h2>Landlord Info 🕴</h2>
      <p>We might want to reach out to your current landlord to get a sense of how you are as a tenant.</p>
      <Input
        label="name:"
        type="text"
        name="landlord-name"
        placeholder="John Doe"
        value={landlord.name}
        onChange={e => onChange({ ...landlord, name: e.currentTarget.value })}
      />
      <Input
        label="email:"
        type="text"
        name="landlord-email"
        placeholder="landlord@email.com"
        value={landlord.email}
        onChange={e => onChange({ ...landlord, email: e.currentTarget.value })}
      />
      {error ? <FormError message={error} /> : null}
    </React.Fragment>
  );
}
