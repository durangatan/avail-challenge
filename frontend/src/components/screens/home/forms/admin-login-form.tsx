import React, { useState } from 'react';
import { Input, Button } from '../../../elements';
import { FormTag, CanError } from '../../../elements/form';
import { AdminArguments } from '../../../../models/Admin';
type AdminState = AdminArguments & CanError;

export default function AdminLoginForm() {
  const [admin, setAdmin] = useState<AdminState>({
    email: '',
    password: ''
  });

  return (
    <FormTag>
      <h2>Admin Login 🛠</h2>
      <Input
        label="email:"
        name="email"
        value={admin.email}
        type={'email'}
        onChange={e => setAdmin({ ...admin, email: e.currentTarget.value })}
        placeholder="email@domain.com"
      />
      <Input
        label="password:"
        name="password"
        value={admin.password}
        type={'password'}
        onChange={e => setAdmin({ ...admin, password: e.currentTarget.value })}
        placeholder="password"
      />
      <Button onClick={() => console.log(admin)} buttonType="action" text="Log In" />
    </FormTag>
  );
}
