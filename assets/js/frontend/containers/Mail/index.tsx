import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MailComponent } from "./MailComponent";
import * as styled from "./styles/index";
import { isEmpty } from "lodash";
import { SearchComponent } from "../../components/SearchComponent/search";
import { Color } from "../../components/colorCodes";
import OnClickOutside from "../../components/OnClickOutside";
import { deleteMail, getMails } from "./actions";
import { fetchData } from "../requests";
import { MailModal } from "./MailModal";
import { TabsFormDefinition } from "./utils/tabsFormDef";
import { socket } from "../../socket";

export const MailBox = () => {
  const [mails, setMails] = useState<Mail[]>([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [active, setActive] = useState(true);
  const [selectedMailId, setSelectedMailId] = useState(null);
  const navigate = useNavigate();

  const handleDeleteMail = async (id: string) => {
    const response = await deleteMail(id);
    setMails(response);
  };
  const handleSelectedMailId = (id: string) => setSelectedMailId(id);

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
    fetchData(getMails, setMails);
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
            <OnClickOutside onClickOutsideFn={() => setSearchClicked(false)}>
              <SearchComponent
                {...searchProps}
                onClick={() => setSearchClicked(true)}
              />
            </OnClickOutside>
          </styled.Header>
          <styled.MailsContainer>
            <styled.MailsHeader>
              <styled.TabsWrapper>
                {TabsFormDefinition.map((tab) => (
                  // Change url when different tabs are clicked, then filter mail list according to the tab active
                  <styled.Tab key={tab.label} active>
                    <>{tab.icon}</>
                    <styled.TabLabel active={active}>
                      {tab.label}
                    </styled.TabLabel>
                  </styled.Tab>
                ))}
              </styled.TabsWrapper>
            </styled.MailsHeader>
            <styled.MailsWrapper>
              {!selectedMailId && !isEmpty(mails) ? (
                mails.map((mail) => (
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
                <MailModal
                  onCloseModal={handleSelectedMailId}
                  selectedMailId={selectedMailId}
                  onDelete={handleDeleteMail}
                />
              )}
            </styled.MailsWrapper>
          </styled.MailsContainer>
        </styled.ContentWrapper>
      </styled.BackgroundPic>
    </styled.Wrapper>
  );
};
