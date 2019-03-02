import { useMemo } from 'react';

export type WorkoutTotals = {
	totalWeight: number;
	totalTime: number;
	totalSets: number;
};

export default function(workouts: Array<any>) {
	return useMemo<WorkoutTotals>(
		() =>
			workouts.reduce<WorkoutTotals>(
				(acc, workout) => ({
					totalTime: acc.totalTime + workout.totalTime,
					totalWeight: acc.totalWeight + workout.weight,
					totalSets: acc.totalSets + workout.sets.length
				}),
				{ totalWeight: 0, totalTime: 0, totalSets: 0 }
			),
		[workouts]
	);
}
