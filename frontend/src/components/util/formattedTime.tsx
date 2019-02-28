export default function formattedTime(timeMs: number) {
	const seconds = timeMs / 1000;
	let remainingSeconds, hours, minutes;
	if (seconds > 3600) {
		hours = Math.floor(seconds / 3600);
		remainingSeconds = Math.floor(seconds % 3600);
	} else {
		remainingSeconds = Math.floor(seconds);
	}
	if (remainingSeconds > 60) {
		minutes = Math.floor(seconds / 60);
		remainingSeconds = Math.floor(seconds % 60);
	}
	const twoZeros = (number?: number) => {
		if (!number) {
			return `00`;
		}
		return number < 10 ? `0${number}` : number;
	};
	return `${twoZeros(hours)}:${twoZeros(minutes)}:${twoZeros(
		remainingSeconds
	)}`;
}
