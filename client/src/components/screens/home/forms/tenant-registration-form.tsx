import React, { useState } from 'react';
import { Input, Button } from '../../../elements';
import { FormTag, CanError } from '../../../elements/form';

type TenantRegistrationState = {
  email: string;
} & CanError;

export default function TenantRegistrationForm() {
  const [tenantEmail, setTenantEmail] = useState<TenantRegistrationState>({
    email: ''
  });

  return (
    <FormTag>
      <h2>Tenant Registration 👨‍💻</h2>
      <p>Enter your email here to start the application process. We'll email you a link to the registration form.</p>
      <Input
        label="email:"
        name="email"
        value={tenantEmail.email}
        type="text"
        onChange={e => setTenantEmail({ email: e.currentTarget.value })}
        placeholder="email@domain.com"
      />
      <Button onClick={() => console.log('registered')} buttonType="action" text="send" />
    </FormTag>
  );
}
