import React from "react";
import { ClinicianDetailsProps } from "types/api";

interface ClinicianDetailsViewProps {
  clinicianDetails: ClinicianDetailsProps;
}

export const ClinicianDetailsView = ({
  clinicianDetails,
}: ClinicianDetailsViewProps) => {
  const formattedName = clinicianDetails.preferredName
    ? `${clinicianDetails.preferredName} (${clinicianDetails.firstName})`
    : clinicianDetails.firstName;
  return (
    <div>
      <div>{clinicianDetails.title}</div>
      <div>{formattedName}</div>
      <div>{clinicianDetails.middleName}</div>
      <div>{clinicianDetails.familyName}</div>
      <div>{clinicianDetails.suffix}</div>
    </div>
  );
};
