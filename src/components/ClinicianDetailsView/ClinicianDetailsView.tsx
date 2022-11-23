import React from "react";
import { ClinicianDetailsProps } from "types/api";
import { formatName } from "utils/fn-helper";

interface ClinicianDetailsViewProps {
  clinicianDetails: ClinicianDetailsProps;
}

export const ClinicianDetailsView = ({
  clinicianDetails,
}: ClinicianDetailsViewProps) => {
  const formattedName = formatName(
    clinicianDetails.firstName,
    clinicianDetails.preferredName
  );
  return (
    <div>
      {clinicianDetails.title} {formattedName} {clinicianDetails.middleName}{" "}
      {clinicianDetails.familyName} {clinicianDetails.suffix}
    </div>
  );
};
