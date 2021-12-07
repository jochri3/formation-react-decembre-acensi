import { combineReducers } from "redux";
import contactReducer from "./contacts/reducer";
import apiLoadingReducer from "./api/loading";
import apiErrorReducer from "./api/error";

const rootReducer = combineReducers({
  contacts: contactReducer,
  apiLoading: apiLoadingReducer,
  apiError: apiErrorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
