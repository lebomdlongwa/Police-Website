import React, { ChangeEvent, useState } from "react";
import * as styled from "./styles";
import { Button } from "../../components/Button/button";
import { Color } from "../../components/colorCodes";
import { login, signUp, signUpWithGoogle } from "./actions";
import google_logo from "../../images/google_logo.jpg";
import { BackIcon } from "../../components/icons/back";

type SignInProps = {
  onAuthenticate: VoidCallBack;
  onCurrentUser: (user: UserObject) => void;
};

export const SignIn = (props: SignInProps) => {
  const { onAuthenticate, onCurrentUser } = props;

  const [notSignedIn, setNotSignedIn] = useState(false);
  const [formObject, setFormObject] = useState({
    username: null,
    password: null,
    name: null,
    surname: null,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormObject({
      ...formObject,
      [e.target.name]: e.target.value,
    });

  const signText = notSignedIn ? "Sign Up" : "Sign In";
  const googleSignText = `SIGN ${notSignedIn ? "UP" : "IN"} WITH GOOGLE`;

  const handleSubmitCredentials = async () => {
    let response;

    if (notSignedIn) {
      response = await signUp(formObject);
      onCurrentUser(response);
      // window.location.reload;
    } else {
      response = await login(formObject);
      onCurrentUser(response);
      // window.location.reload;
    }

    if (response?.username?.length > 0) {
      onAuthenticate();
    }
  };

  return (
    <styled.Wrapper>
      <styled.BlueBackground></styled.BlueBackground>
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
            <Button
              text={signText}
              buttonColor={Color.darkBlue}
              paddingSides={70}
              onClick={handleSubmitCredentials}
              radius={20}
            />
            <styled.GoogleButtonWrapper notSignedIn={notSignedIn}>
              <styled.GoogleButton
                onClick={signUpWithGoogle}
                notSignedIn={notSignedIn}
              >
                <styled.GoogleIcon src={google_logo} />
                {googleSignText}
              </styled.GoogleButton>
            </styled.GoogleButtonWrapper>
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
