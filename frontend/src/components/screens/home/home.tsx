import React, { useState } from 'react';
import styled from 'styled-components';
import { LinkButton, Input } from '../../elements';
import { AdminArguments } from '../../../models/Admin';
import { Main } from '../../page';
import { Button } from 'react-native';

const FormSection = styled.section``;
// should have a login /register form
// https://reacttraining.com/react-router/web/example/auth-workflow

type CanError = {
	didError?: boolean;
	error?: string;
};

export default function Home() {
	const [admin, setAdmin] = useState<AdminArguments & CanError>({
		email: '',
		password: ''
	});
	const [tenantEmail, setTenantEmail] = useState<AdminArguments & CanError>({
		email: ''
	});

	<Main>
		<h1>Tenant Portal 🏠</h1>
		<FormSection>
			<h2>Tenant Registration 👨‍💻</h2>
			<p>
				Enter your email here to start the registration process. We'll
				email you a link to the registration form.
			</p>
			<Input
				label="email"
				value={tenantEmail}
				type="email"
				onChange={e => setTenantEmailValidated({ email: e.currentTarget.value })}
			/>
			<Button onClick />
		</FormSection>
		<FormSection>
			<h2>Admin Login 🛠</h2>
			<Input
				label="email"
				value={admin.email}
				type={'email'}
				onChange={e =>
					setAdmin({ ...admin, email: e.currentTarget.value })
				}
			/>
			<Input
				label="password"
				value={admin.password}
				type={'password'}
				onChange={e =>
					setAdminValidated({ ...admin, password: e.currentTarget.value })
				}
			/>
		</FormSection>
	</Main>;
}
