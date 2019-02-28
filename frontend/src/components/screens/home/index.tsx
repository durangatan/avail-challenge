import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../elements';
import { ButtonContainer } from '../../elements/button';
import { Main } from '../../page';

export default function Home() {
	return (
		<Main>
			<h1>💪 My Workout App 💪</h1>
			<LinkButton
				to="/workout"
				text="START WORKOUT"
				buttonType="success"
			/>
			<ButtonContainer>
				<LinkButton to="/edit" text="Edit" buttonType="action" />
				<LinkButton to="/stats" text="Stats" buttonType="default" />
			</ButtonContainer>
		</Main>
	);
}
