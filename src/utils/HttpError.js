class HttpError extends Error {
  constructor(status = 500, message = 'internal server error') {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

module.exports = HttpError;
