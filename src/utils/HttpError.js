class HttpError extends Error {
  constructor(status = 500, message = 'Something went wrong') {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

module.exports = HttpError;
