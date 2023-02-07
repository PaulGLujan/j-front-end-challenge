import styled from "styled-components";
import { ChallengeCard } from "../../components/ChallengeCard";
import { Heading } from "../../components/Heading";

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

const challenge = {
  id: 1,
  name: "Vegan for a Week",
  contentKey: "vegan-week",
  timePeriod: "week",
  category: "food",
};

export const Challenges = () => {
  return (
    <Container>
      <ModHeading>Hi [first Name]</ModHeading>
      <SubHeading>Take a challenge to earn trees.</SubHeading>
      <ChallengesRow>
        <ChallengeCard challenge={challenge} />
        <ChallengeCard challenge={challenge} />
      </ChallengesRow>
    </Container>
  );
};
