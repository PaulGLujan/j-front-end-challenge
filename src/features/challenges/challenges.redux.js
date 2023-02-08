import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiTypeBuilder, callApi } from "../../utility/api";

const FETCH_CHALLENGES = apiTypeBuilder("FETCH_CHALLENGES");
const JOIN_CHALLENGE = apiTypeBuilder("JOIN_CHALLENGE");

export const fetchChallenges = () =>
  callApi({
    type: FETCH_CHALLENGES,
    method: "GET",
    endpoint: "/interviews/challenges",
  });

// Handle returned userChallenge in reducer below or feel free to implement an alternative data fetch/state management solution
export const joinChallenge = (challengeId) =>
  callApi({
    type: JOIN_CHALLENGE,
    method: "POST",
    endpoint: `/interviews/challenges/${challengeId}`,
  });

export const initialState = {
  challenges: null,
  userChallenge: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHALLENGES.success:
      return {
        ...state,
        challenges: action.payload.challenges,
      };
    case JOIN_CHALLENGE.success:
      return {
        ...state,
        userChallenge: { ...action.payload.userChallenge },
      };
    default:
      return state;
  }
};

// Custom hook to fetch challenges. Feel free to delete/modify/add your own custom hooks
export const useChallengesData = () => {
  const dispatch = useDispatch();
  const challenges = useSelector((s) => s.challenges.challenges);

  useEffect(() => {
    if (!challenges) {
      dispatch(fetchChallenges());
    }
  }, [challenges, dispatch]);

  return challenges;
};

export const useUserChallengeData = () => {
  return useSelector((s) => s.challenges.userChallenge);
};
