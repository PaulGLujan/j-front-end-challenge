import styled from "styled-components";
import { Heading } from "./Heading";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <Heading>Loading...</Heading>
    </Container>
  );
};
