import {combineReducers} from "redux";

import {reducer as ConfigReducer} from "./ConfigReducer";

export default combineReducers({
    config: ConfigReducer
})
