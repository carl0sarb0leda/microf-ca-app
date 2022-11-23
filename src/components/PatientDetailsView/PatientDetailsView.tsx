import React, { useState } from "react";
import { PatientDataProps, TabProps } from "types/common";
import { formatName } from "utils/fn-helper";
import { TabNavPanel } from "./patientDetailsView.styled";

interface PatientDetailsViewProps {
  patientListData: PatientDataProps[];
}

export const PatientDetailsView = ({
  patientListData,
}: PatientDetailsViewProps) => {
  //Parsed options assign and panelId to control navigation props
  const parsedOptions = Array.isArray(patientListData)
    ? patientListData.map((patient) => {
        return {
          ...patient,
          panelId: `panel-${patient.id}`,
        };
      })
    : [];
  //Define selected tab and default value
  const [selectedTab, setSelectedTab] = useState<TabProps>(parsedOptions[0]);
  const handleSelect = (clickedOption: TabProps) => {
    if (clickedOption.id !== selectedTab.id) {
      setSelectedTab(clickedOption);
    }
  };
  return (
    <>
      <div role="tablist">
        {parsedOptions.map((option) => {
          return (
            <button
              key={option.id}
              role="tab"
              id={option.id}
              aria-controls={option.panelId}
              aria-selected={option.id === selectedTab.id}
              onClick={() => handleSelect(option)}
            >
              {option.name}({option.id})
            </button>
          );
        })}
      </div>
      {parsedOptions.map((option) => {
        const formattedName = formatName(
          option.details.firstName,
          option.details.preferredName
        );
        return (
          <TabNavPanel
            key={option.id}
            role="tabpanel"
            id={option.panelId}
            aria-labelledby={option.id}
            isHidden={option.id !== selectedTab.id}
          >
            {option.details.title} {formattedName} {option.details.middleName}{" "}
            {option.details.familyName} {option.details.suffix}
            <div>
              Age: {option.details.age} Sex: {option.details.sex}
            </div>
          </TabNavPanel>
        );
      })}
    </>
  );
};
