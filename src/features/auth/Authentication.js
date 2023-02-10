// Reference: https://styled-components.com/
import { useState } from "react";
import styled from "styled-components";
import Svg from "react-inlinesvg";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import JoroLogo from "../../assets/svg/Joro Logo.svg";
import { login } from "./auth.redux";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { Center } from "../../components/Center";

const Logo = styled(Svg)`
  height: 30px;
  position: relative;
  bottom: 10vh;
`;

const FormContainer = styled.form`
  width: 400px;
`;

export const Authentication = () => {
  const [email, setEmail] = useState("testuser@joro.tech");
  const [password, setPassword] = useState("mockUserPassword");
  const dispatch = useDispatch();
  const history = useHistory();

  const authenticate = (e) => {
    e.preventDefault();
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
    <Center>
      <Logo src={JoroLogo} />
      <Heading>Sign In</Heading>
      <FormContainer>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="TEXT"
          value={email}
        />
        <Input
          type="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        <Button onClick={authenticate} component={Link}>
          Sign In
        </Button>
      </FormContainer>
    </Center>
  );
};
