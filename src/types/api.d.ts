export type LogInProps = {
  userName: string;
  userPassword: string;
};

export type ErrorResponse = {
  httpStatusCode: number;
  errorMessage: string;
};

export type SessionTokenResponse = {
  sessionToken: string;
};
