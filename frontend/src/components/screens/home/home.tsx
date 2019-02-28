import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../elements';
import { ButtonContainer } from '../../elements/button';
import { Main } from '../../page';

// should have a login /register form
// https://reacttraining.com/react-router/web/example/auth-workflow

export default function Home() {
	return (
		<Main>
			<ButtonContainer>
				<LinkButton to="/edit" text="Edit" buttonType="action" />
				<LinkButton to="/stats" text="Stats" buttonType="default" />
			</ButtonContainer>
		</Main>
	);
}
