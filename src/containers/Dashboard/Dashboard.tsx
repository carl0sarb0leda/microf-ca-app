import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ClinicianDetailsProps, PatientListProps } from "types/api";
import { getClinicianDetails, getPatientList } from "utils/api-service";
import { useAuth } from "utils/auth-context";
import { ClinicianDetailsView, PatientDetailsView } from "components";

export const Dashboard = () => {
  const { token, onLogout } = useAuth();

  //TODO: Data logic from API can be abstracted in custom hook, pending task due to time
  //Clinician Data
  const [clinicianDetailsData, setClinicianDetailsData] =
    useState<ClinicianDetailsProps | null>(null);
  const [isLoadingClinicianDetails, setIsLoadingClinicianDetails] =
    useState(false);

  //Patient List Data
  const [patientListData, setPatientListData] =
    useState<PatientListProps | null>(null);
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
      setIsLoadingPatientList(true);
      const response = await getPatientList(userToken);
      setPatientListData(response);
      setIsLoadingPatientList(false);
    };
    if (token) {
      getClinicianData(token);
      getPatientListData(token);
    }
  }, []);

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
      return <PatientDetailsView patientList={patientListData} />;
    }
    return null;
  };
  return (
    <div>
      <h2>Clinical Portal</h2>
      <button onClick={handleLogOut}>Log out</button>
      <ClinicianDetails />
      <PatientDetails />
    </div>
  );
};
