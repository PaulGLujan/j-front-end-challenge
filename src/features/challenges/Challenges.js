import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { ChallengeCard } from "../../components/ChallengeCard";
import { Heading } from "../../components/Heading";
import { Loading } from "../../components/Loading";
import { useChallengesData } from "./challenges.redux";

const BodyStyle = createGlobalStyle`
  body {
    background-color: #F8F8F8;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  bottom: 10vh;
`;

const HeadingContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const ChallengesRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
`;

const ModHeading = styled(Heading)`
  margin-bottom: 80px;
`;

const SubHeading = styled.h2`
  font-family: "poppins-bold";
`;

export const Challenges = () => {
  const firstName = useSelector((state) => state.auth.user.firstName);
  const challenges = useChallengesData();

  if (!challenges) {
    return <Loading />;
  }

  return (
    <Container>
      <BodyStyle />
      <HeadingContainer>
        <ModHeading>Hi {firstName}</ModHeading>
        <SubHeading>Take a challenge to earn trees.</SubHeading>
      </HeadingContainer>

      <ChallengesRow>
        {challenges &&
          challenges.map((challenge) => (
            <ChallengeCard challenge={challenge} key={challenge.contentKey} />
          ))}
      </ChallengesRow>
    </Container>
  );
};
