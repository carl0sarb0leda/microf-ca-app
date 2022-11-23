export type PatientDataProps = {
  id: string;
  name: string;
  details: PatientDetailsProps;
};

export type TabProps = PatientDataProps & {
  panelId: string;
};
