import React, { useEffect, useRef, useState } from "react";

import * as styled from "./styles";
import { formDefinition } from "./utils/formDefinition";

import { SwitchComponent } from "../../../../components/Switch";
import { generateContent } from "../../../../gemini";
import { Button } from "../../../../components/Button/button";
import { Color } from "../../../../components/colorCodes";
import { CircleLoader } from "../../../../components/Spinner";
import { DeleteIcon } from "../../../../components/icons/delete";

type ExpandedComponentProps = {
  report: ReportItem;
  onUpdate?: (id: string, params: Partial<ReportParams>) => Promise<void>;
};

export const ExpandedComponent = (props: ExpandedComponentProps) => {
  const { report, onUpdate } = props;

  const [displayAiModal, setDisplayAiModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [distanceToTop, setDistToTop] = useState(0);
  const [distanceToLeft, setDistToLeft] = useState(0);
  const [summarizedBrief, setSummarizedBrief] = useState("");
  const headerRef = useRef(null);

  const handleSetIsLoading = (value: boolean) => setIsLoading(value);

  useEffect(() => {
    const measureDistance = () => {
      if (headerRef.current) {
        const select = headerRef.current.getBoundingClientRect();

        setDistToLeft(select.right - 150);
        setDistToTop(select.bottom - 20);
      }
    };

    window.addEventListener("scroll", measureDistance);
    window.addEventListener("resize", measureDistance);

    measureDistance();

    return () => {
      window.removeEventListener("scroll", measureDistance);
      window.removeEventListener("resize", measureDistance);
    };
  }, []);

  const handleSummarizeBrief = async () => {
    setDisplayAiModal(true);
    const text = await generateContent(
      handleSetIsLoading,
      report.brief_circumstance
    );
    setSummarizedBrief(text);
    handleSetIsLoading(false);
  };

  const lines = summarizedBrief.trim().split("\n");
  const summaryLine = lines[0]; // first line is the summary
  const bulletLines = lines
    .slice(1)
    .filter((line) => line.trim().startsWith("*"))
    .map(
      (line) =>
        line
          .replace(/^\*\s*/, "") // remove "* "
          .replace(/\*\*(.*?)\*\*/g, "$1") // remove "**bold**"
    );

  return (
    <styled.ExpandedItemWrapper>
      <styled.TopItemWrapper>
        <styled.TopItems>
          <styled.BriefCircumstanceHeader ref={headerRef}>
            BRIEF CIRCUMSTANCE
            <styled.AskAiButton>
              <Button
                text="Ask AI"
                size="small"
                paddingSides={5}
                paddingTopBottom={3}
                buttonColor={Color.darkModerateBlue}
                onClick={handleSummarizeBrief}
              />
            </styled.AskAiButton>
          </styled.BriefCircumstanceHeader>
          {displayAiModal && (
            <styled.SummarizedBrief top={distanceToTop} left={distanceToLeft}>
              <styled.AskGeminiHeader>
                Summarized Brief Summary
                <styled.CloseAiModal onClick={() => setDisplayAiModal(false)}>
                  <DeleteIcon size={25} color={Color.red} />
                </styled.CloseAiModal>
              </styled.AskGeminiHeader>
              <styled.AskGeminiBody>
                {isLoading ? (
                  <CircleLoader size={20} />
                ) : (
                  <>
                    <styled.Summary>{summaryLine}</styled.Summary>
                    <styled.List>
                      {bulletLines.map((line, index) => (
                        <styled.ListItem key={index}>{line}</styled.ListItem>
                      ))}
                    </styled.List>
                  </>
                )}
              </styled.AskGeminiBody>
            </styled.SummarizedBrief>
          )}
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
