import { combineReducers } from "redux";

import Auth from "./auth/reducer.js";

const rootReducers = combineReducers({
    Auth,
});

export default rootReducers;
