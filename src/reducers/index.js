import { combineReducers } from "redux";
import users from "./users";
import room from "./room";
import score from "./score";

export default combineReducers({ users, room, score });
