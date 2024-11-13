import styled from "styled-components";

export const GeneralCardWrapper = styled.div.attrs({
  className: "GeneralCardWrapper",
})`
  width: 100%;
  height: 100%;
`;

export const GeneralCardContent = styled.div.attrs({
  className: "GeneralCardContent",
})`
  width: 100%;
  height: 100%;
  padding: 15px 15px;
`;

export const GeneralCardHeader = styled.div.attrs({
  className: "GeneralCardHeader",
})`
  width: 100%;
  height: 30px;
  color: #333;
`;

export const AvatarUserContainer = styled.div.attrs({
  className: "AvatarUserContainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserInfoWrapper = styled.div.attrs({
  className: "UserInfoWrapper",
})`
  width: calc(100% - 45px);
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoContent = styled.div.attrs({
  className: "InfoContent",
})`
  color: #333;
  font-size: 12px;
  font-weight: 400;
`;

export const TimeLocationContatiner = styled.div.attrs({
  className: "TimeLocationContatiner",
})`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  color: #333;
`;

export const TimeLocationWrapper = styled.div.attrs({
  className: "TimeLocation Wrapper",
})`
  color: #333;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TimeLocationContent = styled.div.attrs({
  className: "TimeLocationContent",
})`
  margin: 5px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const GoogleMap = styled.div.attrs({
  className: "GoogleMap",
})`
  width: 100%;
  height: 100px;
`;
