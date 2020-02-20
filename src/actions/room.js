import axios from "axios";

export const ALL_ROOMS = "ALL_ROOMS";
export const ONE_NEW_ROOM = "ONE_NEW_ROOM";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function allRooms(rooms) {
  return {
    type: ALL_ROOMS,
    payload: { rooms }
  };
}
export function room(name) {
  return function(dispatch, getState) {
    axios
      .post(`${dbUrl}/room`, {
        roomName: name
      })

      .then(response => dispatch(allRooms()));
  };
}

function newRoom() {
  return { type: ONE_NEW_ROOM };
}

export function newRoomCreate(name) {
  return function(dispatch, getState) {
    axios
      .post(`${dbUrl}/room`, {
        name
      })
      .then(response => dispatch(newRoom()));
  };
}
