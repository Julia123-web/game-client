import axios from "axios";

export const ALL_ROOMS = "ALL_ROOMS";
export const ONE_NEW_ROOM = "ONE_NEW_ROOM";

function allRooms(rooms) {
  return {
    type: ALL_ROOMS,
    payload: { rooms }
  };
}
export function room(name) {
  return function(dispatch, getState) {
    axios
      .post("http://localhost:4000/room", {
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
      .post("http://localhost:4000/room", {
        name
      })
      .then(response => dispatch(newRoom()));
  };
}
