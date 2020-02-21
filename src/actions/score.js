import axios from "axios";

export const ONE_NEW_SCORE = "ONE_NEW_SCORE";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function allScores(score) {
  return {
    type: ONE_NEW_SCORE,
    payload: { score }
  };
}
export function postScore(score, level) {
  return async function(dispatch, getState) {
    const { token } = getState().users.token;
    const response = await axios.post(
      `${dbUrl}/score`,
      {
        score: score,
        level
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    //dispatch(allScores(response));
  };
}
