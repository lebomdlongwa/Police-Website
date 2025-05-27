import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isEmpty } from "lodash";

import { MailComponent } from "./MailComponent";
import { MailModal } from "./MailModal";
import { deleteMail, getMails, rejectMail } from "./actions";
import { TabsFormDefinition } from "./utils/tabsFormDef";
import * as styled from "./styles/index";

import { SearchComponent } from "../../components/SearchComponent/search";
import { Color } from "../../components/colorCodes";
import { socket } from "../../socket";
import { CircleLoader } from "../../components/Spinner";
import { NoDataComponent } from "../../components/NoData";

export const MailBox = () => {
  const [mails, setMails] = useState<Mail[]>(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedMailId, setSelectedMailId] = useState(null);
  const [noData, setNoData] = useState(false);

  const [currentTab, setCurrentTab] = useState("All Mails");
  const navigate = useNavigate();

  const renderMailList = (() => {
    if (isEmpty(mails)) return;

    switch (currentTab) {
      case "All Mails":
        return mails.filter((mail) => mail.rejected !== true);
      case "Crime Reports":
        return mails.filter((mail) => mail.type === "crime");
      case "Missing/Wanted Reports":
        return mails.filter((mail) => mail.type === "person");
      case "Rejected Reports":
        return mails.filter((mail) => mail.rejected === true);
      default:
        return mails.filter((mail) => mail.rejected !== true);
    }
  })();

  const handleDeleteMail = (id: string) => {
    deleteMail(id)
      .then((response) => setMails(response))
      .catch((err) => err);
  };

  const handleRejectMail = (id: string) => {
    rejectMail(id, { rejected: true })
      .then((response) => setMails(response))
      .catch((err) => err);
  };

  const handleSelectedMailId = (id: string) => setSelectedMailId(id);
  const handleCurrentTab = (label: string) => setCurrentTab(label);
  const handleSetMails = (mails: Mail[]) => setMails(mails);
  const handleSetNoData = () => setNoData(true);

  const channel = socket.channel("mail:lobby", {});

  useEffect(() => {
    channel
      .join()
      .receive("ok", (resp) => {
        console.log("Joined successfully", resp);
      })
      .receive("error", (resp) => {
        console.log("Unable to join", resp);
      });

    channel.on("get_mails", (payload) => {
      console.log("Mails received", payload.mails.data);
      setMails(payload.mails.data);
    });

    channel.on("new_mail_item", (payload) => {
      setMails((prevState) => [payload.mail.data, ...prevState]);
    });
  }, [channel]);

  useEffect(() => {
    getMails().then((res) => {
      setMails(res);

      if (isEmpty(res)) {
        setNoData(true);
      }
    });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.search.length < 1) {
        setSelectedMailId(null);
      } else {
        const params = new URLSearchParams(window.location.search);
        const mailId = params.get("mailId");
        setSelectedMailId(mailId);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const updateUrlWithMail = (params: string) => {
    const newUrl = `${window.location.pathname}${params}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const searchProps = {
    height: 50,
    width: 700,
    border: false,
    borderRadius: 25,
    background: !searchClicked ? "rgba(255, 255, 255, 0.3)" : null,
    iconColor: !searchClicked ? Color.white : null,
    fontSize: 18,
  };

  return (
    <styled.Wrapper>
      <styled.BackgroundPic>
        <styled.ContentWrapper>
          <styled.Header>
            <SearchComponent
              {...searchProps}
              onClick={() => setSearchClicked(true)}
              itemList={mails}
              searchValue="name"
              handleDisplaySearchedItem={handleSelectedMailId}
            />
          </styled.Header>
          <styled.MailsContainer>
            <styled.MailsHeader>
              <styled.TabsWrapper>
                {TabsFormDefinition.map((tab) => (
                  <styled.Tab
                    key={tab.label}
                    active={currentTab === tab.label}
                    onClick={() => {
                      handleCurrentTab(tab.label);
                      setSelectedMailId(null);
                    }}
                  >
                    <>{tab.icon}</>
                    <styled.TabLabel>{tab.label}</styled.TabLabel>
                  </styled.Tab>
                ))}
              </styled.TabsWrapper>
            </styled.MailsHeader>
            <styled.MailsWrapper>
              {noData && <NoDataComponent isEmail />}
              {isEmpty(mails) && !noData ? (
                <CircleLoader size={50} />
              ) : (
                <>
                  {!selectedMailId ? (
                    renderMailList?.length > 0 ? (
                      renderMailList.map((mail) => (
                        <MailComponent
                          key={mail.id}
                          mail={mail}
                          onClick={() => {
                            handleSelectedMailId(mail.id);
                            updateUrlWithMail(`?mailId=${mail.id}`);
                          }}
                        />
                      ))
                    ) : (
                      !noData && <NoDataComponent isEmail />
                    )
                  ) : (
                    <MailModal
                      onCloseModal={handleSelectedMailId}
                      selectedMailId={selectedMailId}
                      onDelete={handleDeleteMail}
                      onReject={handleRejectMail}
                      handleSetMails={handleSetMails}
                      mails={mails}
                      handleSetNoData={handleSetNoData}
                    />
                  )}
                </>
              )}
            </styled.MailsWrapper>
          </styled.MailsContainer>
        </styled.ContentWrapper>
      </styled.BackgroundPic>
    </styled.Wrapper>
  );
};
