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
    case ActionTypes.FETCH_CONTACT_BY_ID_SUCCESS:
      return { ...state, item: action.payload };
    case ActionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        list: state.list.filter((contact) => contact.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default contactReducer;
