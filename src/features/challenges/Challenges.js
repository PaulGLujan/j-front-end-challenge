import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchChallenges } from "./challenges.redux";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChallenges());
  }, []);

  const firstName = useSelector((state) => state.auth.user.firstName);
  const challenges = useSelector(
    (state) => state.challenges?.challenges ?? false
  );

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
