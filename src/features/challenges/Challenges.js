import styled from "styled-components";
import { useSelector } from "react-redux";
import { ChallengeCard } from "../../components/ChallengeCard";
import { Heading } from "../../components/Heading";
import { Loading } from "../../components/Loading";
import { useChallengesData } from "./challenges.redux";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const ChallengesRow = styled.div`
  display: flex;
  justify-content: space-around;
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
      <ModHeading>Hi {firstName}</ModHeading>
      <SubHeading>Take a challenge to earn trees.</SubHeading>
      <ChallengesRow>
        {challenges &&
          challenges.map((challenge) => (
            <ChallengeCard challenge={challenge} key={challenge.contentKey} />
          ))}
      </ChallengesRow>
    </Container>
  );
};
