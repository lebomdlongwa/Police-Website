import React, { ChangeEvent, useState } from "react";
import * as styled from "./styles";
import { Button } from "../../components/Button/button";
import { Color } from "../../components/colorCodes";
import { login, signUp, signUpWithGoogle } from "./actions";
import google_logo from "../../images/google_logo.jpg";
import { BackIcon } from "../../components/icons/back";

type SignInProps = {
  onCurrentUser: (user: UserObject) => void;
};

export const SignIn = (props: SignInProps) => {
  const { onCurrentUser } = props;

  const [notSignedIn, setNotSignedIn] = useState(false);
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormObject({
      ...formObject,
      [e.target.name]: e.target.value,
    });

  const signText = notSignedIn ? "Sign Up" : "Sign In";
  const googleSignText = `SIGN ${notSignedIn ? "UP" : "IN"} WITH GOOGLE`;

  const handleSubmitCredentials = (admin: boolean) => {
    const updatedFormObject = {
      ...formObject,
      admin: admin,
    };

    if (notSignedIn) {
      signUp(updatedFormObject)
        .then((response) => onCurrentUser(response))
        .catch((err) => err);
    } else {
      login(updatedFormObject)
        .then((response) => onCurrentUser(response))
        .catch((err) => err);
    }
  };

  return (
    <styled.Wrapper>
      <styled.BlueBackground />
      <styled.WhiteBackground>
        <styled.FormWrapper notSignedIn={notSignedIn}>
          {notSignedIn && (
            <styled.BackButton onClick={() => setNotSignedIn(false)}>
              <BackIcon size={40} color={Color.darkBlue} />
            </styled.BackButton>
          )}
          <styled.HeaderLabel>{signText}</styled.HeaderLabel>
          <styled.InputWrapper>
            {notSignedIn && (
              <styled.NameSurname>
                <styled.Section style={{ width: "48%" }}>
                  <styled.Label>Name</styled.Label>
                  <styled.FormInput
                    name="name"
                    value={formObject.name}
                    onChange={onChange}
                  />
                </styled.Section>
                <styled.Section style={{ width: "48%" }}>
                  <styled.Label>Surname</styled.Label>
                  <styled.FormInput
                    name="surname"
                    value={formObject.surname}
                    onChange={onChange}
                  />
                </styled.Section>
              </styled.NameSurname>
            )}
            <styled.Section>
              <styled.Label>Username</styled.Label>
              <styled.FormInput
                name="username"
                value={formObject.username}
                onChange={onChange}
              />
            </styled.Section>
            <styled.Section>
              <styled.Label>Password</styled.Label>
              <styled.FormInput
                name="password"
                value={formObject.password}
                onChange={onChange}
              />
            </styled.Section>
          </styled.InputWrapper>
          <styled.SignInButtonsWrapper notSignedIn={notSignedIn}>
            <styled.DefaultSignInWrapper notSignedIn={notSignedIn}>
              <Button
                text={signText}
                buttonColor={Color.darkBlue}
                paddingSides={notSignedIn ? 78 : 70}
                onClick={() => handleSubmitCredentials(false)}
                radius={20}
              />
              {notSignedIn && (
                <Button
                  text="Admin Sign Up"
                  buttonColor={Color.darkBlue}
                  paddingSides={55}
                  onClick={() => handleSubmitCredentials(true)}
                  radius={20}
                />
              )}
            </styled.DefaultSignInWrapper>
            {/* <styled.GoogleButtonWrapper notSignedIn={notSignedIn}>
              <styled.GoogleButton
                onClick={signUpWithGoogle}
                notSignedIn={notSignedIn}
              >
                <styled.GoogleIcon src={google_logo} />
                {googleSignText}
              </styled.GoogleButton>
            </styled.GoogleButtonWrapper> */}
          </styled.SignInButtonsWrapper>
          {!notSignedIn && (
            <styled.SignInText>
              If you dont have an account you can{" "}
              <styled.BlueText onClick={() => setNotSignedIn(!notSignedIn)}>
                sign up here
              </styled.BlueText>
            </styled.SignInText>
          )}
          <styled.Footer>
            By signing in or up, you agree to our{" "}
            <styled.BlueText>terms</styled.BlueText> and{" "}
            <styled.BlueText>polices</styled.BlueText>
          </styled.Footer>
        </styled.FormWrapper>
      </styled.WhiteBackground>
    </styled.Wrapper>
  );
};
