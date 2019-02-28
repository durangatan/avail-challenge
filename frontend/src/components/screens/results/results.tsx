import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { formattedTime } from '../../util';
import { postWorkout } from '../../../api';
import { LinkButton } from '../../elements';
import { ButtonContainer } from '../../elements/button';
import { Table } from '../../elements';
import { Main } from '../../page';
function Results({ location }: RouteComponentProps) {
	const routineName = location.state.routine.name;
	const numberOfSets = location.state.completedSets.length;
	const totalWeight = location.state.completedSets.reduce(
		(acc: number, currentSet: any) => acc + currentSet.weight,
		0
	);
	const startTime = location.state.initialTime;
	const endTime = location.state.currentTime;
	const totalTimeMs = location.state.currentTime - location.state.initialTime;

	useEffect(() => {
		postWorkout({
			routines: [location.state.routine],
			startTime,
			endTime,
			completedSets: location.state.completedSets
		});
	}, []);

	return (
		<Main>
			<h1>Results</h1>
			<h2>{routineName}</h2>
			<Table
				rows={[
					['Sets', 'Total Weight', 'Total Time'],
					[
						numberOfSets,
						`${totalWeight} lbs`,
						formattedTime(totalTimeMs)
					]
				]}
			/>
			<ButtonContainer>
				<LinkButton to={'/home'} text="home" buttonType={'action'} />
				<LinkButton to={'/stats'} text="Stats" buttonType={'default'} />
			</ButtonContainer>
		</Main>
	);
}

export default withRouter(Results);
