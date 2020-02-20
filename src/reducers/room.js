import { ALL_ROOMS } from "../actions/room";

const initialState = { rooms: [] };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_ROOMS:
      return { rooms: action.payload };
    case "ONE_NEW_ROOM":
      return {
        rooms: [...state.rooms, action.payload]
      };
    default:
      return state;
  }
};
