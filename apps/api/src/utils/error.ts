class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export const createError = (statusCode: number, message: string): Error => {
  const error: HttpError = new HttpError(statusCode, message);
  return error;
};