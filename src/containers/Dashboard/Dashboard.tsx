import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ClinicianDetailsProps } from "types/api";
import { PatientDataProps } from "types/common";
import {
  getClinicianDetails,
  getPatientList,
  getPatientDetail,
} from "utils/api-service";
import { useAuth } from "utils/auth-context";
import { ClinicianDetailsView, PatientDetailsView } from "components";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Dashboard = () => {
  const { token, onLogout } = useAuth();

  //TODO: Data logic from API can be abstracted in custom hook, pending task due to time
  //Clinician Data
  const [clinicianDetailsData, setClinicianDetailsData] =
    useState<ClinicianDetailsProps | null>(null);
  const [isLoadingClinicianDetails, setIsLoadingClinicianDetails] =
    useState(false);

  //Patient Data
  const [patientListData, setPatientListData] = useState<
    PatientDataProps[] | null
  >(null);
  const [isLoadingPatientList, setIsLoadingPatientList] = useState(false);

  const handleLogOut = () => {
    onLogout();
    return <Navigate to="/" replace />;
  };

  useEffect(() => {
    const getClinicianData = async (userToken: string) => {
      setIsLoadingClinicianDetails(true);
      const response = await getClinicianDetails(userToken);
      setClinicianDetailsData(response);
      setIsLoadingClinicianDetails(false);
    };
    const getPatientListData = async (userToken: string) => {
      getPatientList(userToken)
        .then((patientResponse) => {
          setIsLoadingPatientList(true);
          return Promise.all(
            patientResponse.patients.map((patient) => {
              return getPatientDetail(userToken, patient.id).then(
                (detailResponse) => {
                  return { ...patient, details: detailResponse };
                }
              );
            })
          );
        })
        .then((responseValues) => {
          setPatientListData(responseValues);
          setIsLoadingPatientList(false);
        });
    };
    if (token) {
      getClinicianData(token);
      getPatientListData(token);
    }
  }, [token]);

  const ClinicianDetails = () => {
    if (isLoadingClinicianDetails) {
      return <div>Loading Clinical Details...</div>;
    }
    if (clinicianDetailsData) {
      return <ClinicianDetailsView clinicianDetails={clinicianDetailsData} />;
    }
    return null;
  };

  const PatientDetails = () => {
    if (isLoadingPatientList) {
      return <div>Loading Patient List...</div>;
    }
    if (patientListData) {
      return <PatientDetailsView patientListData={patientListData} />;
    }
    return null;
  };
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          alignItems: "center",
        }}
      >
        <h2>Clinical Portal</h2>
        <ClinicianDetails />
        <button onClick={handleLogOut}>Log out</button>
      </Box>
      <PatientDetails />
    </Container>
  );
};
