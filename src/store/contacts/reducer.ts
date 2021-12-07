import { IContact } from "../../@types/i-contact";
import { ContactsAction } from "./actions";
import ActionTypes from "./types";

interface IContactsState {
  list: IContact[];
  item: IContact;
  updated: boolean;
}

const initialsState: IContactsState = {
  list: [],
  item: {} as IContact,
  updated: false,
};

const contactReducer = (
  state: IContactsState = initialsState,
  action: ContactsAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...state, list: action.payload, updated: false };
    case ActionTypes.FETCH_CONTACT_BY_ID_SUCCESS:
      return { ...state, item: action.payload, updated: false };
    case ActionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        updated: true,
        list: state.list.filter((contact) => contact.id !== action.payload.id),
      };
    case ActionTypes.ADD_CONTACT_SUCCESS:
    case ActionTypes.UPDATE_CONTACT_SUCCESS:
      return { ...state, updated: true };
    default:
      return state;
  }
};

export default contactReducer;
