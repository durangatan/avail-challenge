export default class MissingIdError extends Error {
  constructor(message: string) {
    super(message);
  }
}
