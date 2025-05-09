import React from "react";
import { Icon } from "../../../../../components/icons";

export const formDefinition = [
  {
    label: "ACCUSED",
    icon: <Icon name="accused" size={20} />,
    accessor: "accused",
  },
  {
    label: "CRIME TYPE",
    icon: <Icon name="crime" size={21} />,
    accessor: "crime_type",
  },
  {
    label: "SOLVED",
    icon: <Icon name="solved" />,
    accessor: "solved",
  },
];
