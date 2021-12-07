import ActionTypes from "../contacts/types";
import {
  IFetchContactsRequest,
  IFetchContactsFailure,
} from "../contacts/actions";

type ErrorState = { [key in ActionTypes]?: string };

type Action = IFetchContactsRequest | IFetchContactsFailure;

const initialState: ErrorState = {
  fetch_contacts: "",
};

const errorReducer = (state = initialState, action: Action) => {
  const { type } = action;
  const matches = /(.*)_(request|failure)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "failure" ? action.payload : "",
  };
};

export default errorReducer;
