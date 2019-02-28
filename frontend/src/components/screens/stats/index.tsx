import React, { useEffect, useState, useMemo } from 'react';
import { getWorkouts } from '../../../api';
import { Main } from '../../page';
import { formattedTime } from '../../util';
import { Table } from '../../elements';
import { useWorkoutTotalsMemoized } from '../../../hooks';
import { ButtonContainer } from '../../elements/button';
import { LinkButton } from '../../elements';
export default function Stats() {
	const [workouts, setWorkouts] = useState<Array<any>>([]);
	useEffect(() => {
		setWorkouts([
			{ totalTime: 3000, weight: 600, sets: [{}, {}] },
			{ totalTime: 6000, weight: 1000, sets: [{}] }
		]);
		// getWorkouts().then(setWorkouts);
	}, []);

	const { totalWeight, totalSets, totalTime } = useWorkoutTotalsMemoized(
		workouts
	);
	const averageWeight = Math.floor(totalWeight / workouts.length);
	const averageSets = Math.floor(totalSets / workouts.length);
	const averageTime = Math.floor(totalTime / workouts.length);
	return (
		<Main>
			<h1>Stats</h1>
			<h2> {workouts.length} Lifetime Workouts</h2>
			<Table
				rows={[
					['Total Weight', 'Total Sets', 'Total Time'],
					[totalWeight, totalSets, formattedTime(totalTime)]
				]}
			/>
			<Table
				rows={[
					['Average Weight', 'Average Sets', 'Average Time'],
					[averageWeight, averageSets, formattedTime(averageTime)]
				]}
			/>
			<ButtonContainer>
				<LinkButton
					to="/workout"
					text="New Workout"
					buttonType="action"
				/>
				<LinkButton to="/home" text="Back" buttonType="default" />
			</ButtonContainer>
		</Main>
	);
}
