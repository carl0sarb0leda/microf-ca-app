import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ClinicianDetailsProps } from "types/api";
import { getClinicianDetails } from "utils/api-service";
import { useAuth } from "utils/auth-context";
import { ClinicianDetailsView } from "components";

export const Dashboard = () => {
  const { token, onLogout } = useAuth();

  const [clinicianDetailsData, setClinicianDetailsData] =
    useState<ClinicianDetailsProps | null>(null);

  const [isLoadingClinicianDetails, setIsLoadingClinicianDetails] =
    useState(false);

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
    if (token) {
      getClinicianData(token);
    }
  }, []);

  const ClinicalDetails = () => {
    if (isLoadingClinicianDetails) {
      return <div>Loading Clinical Details...</div>;
    }
    if (clinicianDetailsData) {
      return <ClinicianDetailsView clinicianDetails={clinicianDetailsData} />;
    }
    return null;
  };
  return (
    <div>
      <h2>Clinical Portal</h2>
      <button onClick={handleLogOut}>Log out</button>
      <ClinicalDetails />
    </div>
  );
};
