import { combineReducers } from "redux";
import permissionReducer from "./permissionReducer";


export default combineReducers({
    permission: permissionReducer
})