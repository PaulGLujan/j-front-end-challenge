import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { ChallengeCard } from "../../components/ChallengeCard";
import { Heading as BaseHeading } from "../../components/Heading";
import { Loading } from "../../components/Loading";
import { useChallengesData } from "./challenges.redux";
import { Center } from "../../components/Center";

const BodyStyle = createGlobalStyle`
  body {
    background-color: #F8F8F8;
  }
`;

const HeadingContainer = styled.div`
  width: 400px;
`;

const ChallengesRow = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
`;

const Heading = styled(BaseHeading)`
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
    <Center>
      <BodyStyle />
      <HeadingContainer>
        <Heading>Hi {firstName ?? "you!"}</Heading>
        <SubHeading>Take a challenge to earn trees.</SubHeading>
      </HeadingContainer>

      <ChallengesRow>
        {challenges &&
          challenges.map((challenge) => (
            <ChallengeCard challenge={challenge} key={challenge.contentKey} />
          ))}
      </ChallengesRow>
    </Center>
  );
};
