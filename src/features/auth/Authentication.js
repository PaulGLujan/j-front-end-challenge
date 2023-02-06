// Reference: https://styled-components.com/
import React from "react";
import styled from "styled-components";
import {
  Link,
  useHistory
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./auth.redux";

const Container = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-family: 'poppins-bold';
`;

const Button = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 16px;
  width: 200px;
`;

const Instructions = styled.ul`
  margin-bottom: 48px;
`;

export const Authentication = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authenticate = () => {
    // Remove this once input fields added to collected login credentials
    const email = "";
    const password = "";
    dispatch(login(email, password, onSuccessAction, onFailureAction));
  }

  const onSuccessAction = (response) => {
    history.push("/challenges");
    localStorage.setItem("@token", response.mockToken);
    console.log("[LOGIN] succeeded")
  }

  const onFailureAction = () => {
    console.log("[LOGIN] failed")
  }

  return (
    <Container>
      <Heading>Login</Heading>
        <Instructions>
          <li>Implement working login page with client and server side validation</li>
          <li>Use credentials provided in the README</li>
          <li>Upon successful login, navigate to the challenges page.</li>
        </Instructions>
        <Button onClick={authenticate} component={Link}>
          LOGIN
        </Button>
    </Container>
  )
}