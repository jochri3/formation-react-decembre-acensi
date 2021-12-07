import ActionTypes from "../contacts/types";
import { IFetchContactsRequest } from "../contacts/actions";

type LoadingState = { [key in ActionTypes]?: boolean };

type Actions = IFetchContactsRequest;

const initialState: LoadingState = {
  fetch_contacts: false,
};

const apiLoadingReducer = (
  state: LoadingState = initialState,
  action: Actions
) => {
  const { type } = action;
  const matches = /(.*)_(request|success|failure)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "request",
  };
};

export default apiLoadingReducer;
