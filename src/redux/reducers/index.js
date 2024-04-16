import { combineReducers } from "redux";
import AgencyReducer from "./fetchStoreData";


export default combineReducers({
    Agency: AgencyReducer,
});