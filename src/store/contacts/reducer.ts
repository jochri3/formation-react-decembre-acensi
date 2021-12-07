import { IContact } from "../../@types/i-contact";
import { ContactsAction } from "./actions";
import ActionTypes from "./types";

interface IContactsState {
  list: IContact[];
  item: IContact;
}

const initialsState: IContactsState = {
  list: [],
  item: {} as IContact,
};

const contactReducer = (
  state: IContactsState = initialsState,
  action: ContactsAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
