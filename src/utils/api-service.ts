import {
  LogInProps,
  SessionTokenResponse,
  ErrorResponse,
  ClinicianDetailsProps,
  PatientListProps,
} from "types/api";
import fetchMock from "fetch-mock";
import { initFetchMock } from "utils/init-fetch-mock";
initFetchMock(fetchMock);

async function fetchLogin({
  userName,
  userPassword,
}: LogInProps): Promise<string> {
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

async function getClinicianDetails(
  token: string
): Promise<ClinicianDetailsProps> {
  //Fetching Details
  const response = await fetch("/clinician-details", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  if (response.ok) {
    //Parsing the success response
    const data: ClinicianDetailsProps = await response.json();
    return data;
  } else {
    //Parsing the error response
    const { httpStatusCode, errorMessage }: ErrorResponse =
      await response.json();

    const error = {
      message: `${httpStatusCode} - ${errorMessage}`,
    };
    return Promise.reject(error);
  }
}
async function getPatientList(token: string): Promise<PatientListProps> {
  //Fetching Details
  const response = await fetch("/patients", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  if (response.ok) {
    //Parsing the success response
    const data: PatientListProps = await response.json();
    return data;
  } else {
    //Parsing the error response
    const { httpStatusCode, errorMessage }: ErrorResponse =
      await response.json();

    const error = {
      message: `${httpStatusCode} - ${errorMessage}`,
    };
    return Promise.reject(error);
  }
}
export { fetchLogin, getClinicianDetails, getPatientList };
