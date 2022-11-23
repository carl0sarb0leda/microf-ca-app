import { LogInProps, SessionTokenResponse, ErrorResponse } from "types/api";
import fetchMock from "fetch-mock";
import { initFetchMock } from "utils/init-fetch-mock";
initFetchMock(fetchMock);

async function fetchLogin({
  userName,
  userPassword,
}: LogInProps): Promise<any> {
  //Base64 credential
  const credential = window.btoa(userName + ":" + userPassword);
  //Fetching SessionToken
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credential}`,
    },
  });
  if (response.ok) {
    //Parsing the success response
    const { sessionToken }: SessionTokenResponse = await response.json();
    return sessionToken;
  } else {
    //Parsing the error response
    const { httpStatusCode, errorMessage }: ErrorResponse =
      await response.json();

    const error = {
      message: `${httpStatusCode} - ${errorMessage}`,
    };
    alert(error.message);
    return Promise.reject(error);
  }
}
export { fetchLogin };
