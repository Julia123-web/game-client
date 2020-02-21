import { ONE_NEW_SCORE } from "../actions/score";

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_SCORES": {
      return action.payload;
    }
    case "ONE_NEW_SCORE":
      const { score, level, username } = action.payload;
      const levelScore = state[level];
      const newLevelScores = [...levelScore, { username, score }];
      const newState = {
        ...state,
        [level]: newLevelScores
      };
      return newState;
    default:
      return state;
  }
};
