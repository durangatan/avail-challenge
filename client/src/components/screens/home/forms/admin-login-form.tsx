import React, { useState } from 'react';
import { Input, Button } from '../../../elements';
import { FormTag, CanError, FormError } from '../../../elements/form';
import { AdminArguments, Admin } from '../../../../models';
import { login } from '../../../../api';
type AdminState = AdminArguments & CanError;

export default function AdminLoginForm({ setSession }: { setSession: (admin: Admin | null) => void }) {
  const [admin, setAdmin] = useState<AdminState & CanError>({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    return login(new Admin(admin))
      .then((admin: Admin) => {
        setSession(admin);
      })
      .catch(() => {
        setAdmin({ ...admin, error: 'Error logging in. Please check your username and password and try again.' });
      });
  };

  return (
    <FormTag>
      <h2>Admin Login 🛠</h2>
      <p>
        Log in here to see the list of applicants who have submitted so far. You can also change some useful settings.
      </p>
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
      <Button onClick={handleLogin} buttonType="action" text="Log In" />
      {admin.error ? <FormError message={admin.error} /> : null}
    </FormTag>
  );
}
