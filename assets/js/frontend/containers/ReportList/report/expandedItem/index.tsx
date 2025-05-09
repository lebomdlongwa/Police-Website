import React from "react";
import * as styled from "./styles";
import { formDefinition } from "./utils/formDefinition";
import { SwitchComponent } from "../../../../components/Switch";

type ExpandedComponentProps = {
  report: ReportItem;
  onUpdate?: (id: string, params: Partial<ReportParams>) => Promise<void>;
};

export const ExpandedComponent = (props: ExpandedComponentProps) => {
  const { report, onUpdate } = props;

  return (
    <styled.ExpandedItemWrapper>
      <styled.TopItemWrapper>
        <styled.TopItems>
          <styled.BriefCircumstanceHeader>
            BRIEF CIRCUMSTANCE
          </styled.BriefCircumstanceHeader>
          <styled.BriefCircumstanceContent>
            {report.brief_circumstance}
          </styled.BriefCircumstanceContent>
        </styled.TopItems>
        <styled.TopItemsDivider />
        <styled.TopItems>
          <styled.BriefCircumstanceHeader>
            ACTION TAKEN
          </styled.BriefCircumstanceHeader>

          <styled.BriefCircumstanceContent>
            {report.action_taken}
          </styled.BriefCircumstanceContent>
        </styled.TopItems>
      </styled.TopItemWrapper>
      <styled.BottomItemWrapper>
        {formDefinition.map((item, index) => {
          const isSolvedField = item.accessor === "solved";

          return (
            <styled.Accussed key={`item-name-${index}`}>
              <styled.Icon>
                {item.icon}
                <styled.IconLabel>{item.label}</styled.IconLabel>
              </styled.Icon>
              <styled.Content isSolvedField={isSolvedField}>
                {isSolvedField ? (
                  <SwitchComponent
                    fn={() => onUpdate(report.id, { solved: !report.solved })}
                    checked={report.solved}
                  />
                ) : (
                  report[`${item.accessor}` as keyof ReportItem]
                )}
              </styled.Content>
            </styled.Accussed>
          );
        })}
      </styled.BottomItemWrapper>
    </styled.ExpandedItemWrapper>
  );
};
