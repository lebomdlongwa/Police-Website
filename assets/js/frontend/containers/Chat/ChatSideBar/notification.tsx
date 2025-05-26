import React from "react";
import * as styled from "./styles/notification";
import { Icon } from "../../../components/icons";

type NotificationProps = {
  unSeenMessagesCount: number;
  isUserLastMessageAuthor: boolean;
};

export const Notification = (props: NotificationProps) => {
  const { unSeenMessagesCount, isUserLastMessageAuthor } = props;

  const showMessageNotification =
    unSeenMessagesCount > 0 && !isUserLastMessageAuthor;
  const showBlueTick = unSeenMessagesCount === 0 && isUserLastMessageAuthor;
  const showBlackTick = unSeenMessagesCount > 0 && isUserLastMessageAuthor;

  const showNotification = () => {
    if (showMessageNotification) {
      return <styled.Notification>{unSeenMessagesCount}</styled.Notification>;
    } else if (showBlueTick) {
      return <Icon name="blueTick" size={19} />;
    } else if (showBlackTick) {
      return <Icon name="blackTick" size={19} />;
    }

    return;
  };

  return <>{showNotification()}</>;
};
