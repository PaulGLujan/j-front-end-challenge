import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Svg from "react-inlinesvg";
import moment from "moment";
import { joinChallenge, useUserChallengeData } from "../features/challenges/challenges.redux";
import { Button as DefaultButton } from './Button';

import { CHALLENGE_ICONS } from "../constants/challenges";

const Container = styled.div`
  width: 155px;
  height: 282px;
  margin-right: 24px;
  margin-bottom: 16px;
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Logo = styled(Svg).attrs({
  width: 30,
  height: 30
})`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin-bottom: 24px;
  color: #394152;
  font-family: 'poppins-bold';
`;

const DateRange = styled.p`
  size: 12px;
  color: #676977;
  font-family: 'source-sans-regular';
`;

const Button = styled(DefaultButton)`
  width: 120px;
  align-self: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 16px;
`;

export const ChallengeCard = ({ challenge }) => {
  const [loading, setLoading] = useState(false);
  const userChallengeData = useUserChallengeData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userChallengeData?.challengeId) {
      setLoading(false);
    }
  }, [userChallengeData]);

  const DISPLAY_DATE_FORMAT = "MMMM D, YYYY";

  const iconSrc = CHALLENGE_ICONS[challenge.contentKey];
  const startDate = moment().startOf(challenge.timePeriod).format(DISPLAY_DATE_FORMAT);
  const endDate = moment().endOf(challenge.timePeriod).format(DISPLAY_DATE_FORMAT);

  const join = async () => {
    setLoading(true);
    dispatch(joinChallenge(challenge.id));
  };

  const renderButton = () => {
    if (userChallengeData?.challengeId === challenge.id) {
      return <Button success>Check</Button>;
    } else if (loading) {
      return <Button $loading>Loading</Button>;
    } else {
      return <Button onClick={join}>Join</Button>;
    }
  };

  return (
    <Container>
      <Logo src={iconSrc} />
      <Title>{challenge.name}</Title>
      <DateRange>{startDate} - {endDate}</DateRange>
      {renderButton()}
    </Container>
  )
}