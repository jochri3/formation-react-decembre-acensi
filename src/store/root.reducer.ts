import { combineReducers } from "redux";
import contactReducer from "./contacts/reducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
