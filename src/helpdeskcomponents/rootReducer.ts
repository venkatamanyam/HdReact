import {combineReducers} from "@reduxjs/toolkit";
import * as userReducer from "./Users.slice";


const rootReducer = combineReducers({
    [userReducer.userFeatureKey]: userReducer.userSlice.reducer
});
export default rootReducer;