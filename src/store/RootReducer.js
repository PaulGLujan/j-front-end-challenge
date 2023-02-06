import { combineReducers } from "redux";

import challenges from "../features/challenges/challenges.redux";
import auth from "../features/auth/auth.redux";

export const RootReducer = combineReducers({
  auth,
  challenges
});
