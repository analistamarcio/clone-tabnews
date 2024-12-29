export class InternalServerError extends Error {
  constructor({ cause }) {
    super("An unexpected internal error happens.", {
      cause,
    });
    this.name = "InternalServerError";
    this.action = "Please reach out to the Technical Support.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
