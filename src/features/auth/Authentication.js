// Reference: https://styled-components.com/
import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./auth.redux";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 400px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-family: "poppins-bold";
`;

export const Authentication = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authenticate = () => {
    // Remove this once input fields added to collected login credentials
    const email = "";
    const password = "";
    dispatch(login(email, password, onSuccessAction, onFailureAction));
  };

  const onSuccessAction = (response) => {
    history.push("/challenges");
    localStorage.setItem("@token", response.mockToken);
    console.log("[LOGIN] succeeded");
  };

  const onFailureAction = () => {
    console.log("[LOGIN] failed");
  };

  return (
    <Container>
      <Heading>Sign In</Heading>
      <FormContainer>
        <Input type="TEXT" placeholder="Email" />
        <Input type="PASSWORD" placeholder="Password" />
        <Button onClick={authenticate} component={Link}>
          Sign In
        </Button>
      </FormContainer>
    </Container>
  );
};
