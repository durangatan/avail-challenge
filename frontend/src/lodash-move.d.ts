declare module 'lodash-move' {
	export default function move<T>(
		array: Array<T>,
		from: number,
		to: number
	): Array<T>;
}
