export default function formatDate(dateInMs: number) {
  const date = new Date(dateInMs);
  return `${date.getFullYear()}-${twoZeroFormat(date.getMonth() + 1)}-${twoZeroFormat(date.getDate())}`;
}

const twoZeroFormat = (number: number) => `00${number}`.slice(-2);
