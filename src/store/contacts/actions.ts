import { IContact } from "../../@types/i-contact";
import ActionTypes from "./types";

export interface IFetchContactsRequest {
  type: ActionTypes.FETCH_CONTACTS_REQUEST;
}

export interface IFetchContactsSuccess {
  type: ActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: IContact[];
}

export interface IFetchContactsFailure {
  type: ActionTypes.FETCH_CONTACTS_FAILURE;
  error: string;
}




export type ContactsAction =
  | IFetchContactsRequest
  | IFetchContactsSuccess
  | IFetchContactsFailure;
