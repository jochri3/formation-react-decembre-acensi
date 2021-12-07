import { IContact } from "../../@types/i-contact";
import ActionTypes from "./types";

export interface IFetchContactsRequest {
  type: ActionTypes.FETCH_CONTACTS_REQUEST;
  payload?: any;
}

export interface IFetchContactsSuccess {
  type: ActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: IContact[];
}

export interface IFetchContactsFailure {
  type: ActionTypes.FETCH_CONTACTS_FAILURE;
  payload: string;
}

export interface IFetchContactByIdRequest {
  type: ActionTypes.FETCH_CONTACT_BY_ID_REQUEST;
  payload?: any;
}

export interface IFetchContactByIdSuccess {
  type: ActionTypes.FETCH_CONTACT_BY_ID_SUCCESS;
  payload: IContact;
}

export interface IFetchContactByIdFailure {
  type: ActionTypes.FETCH_CONTACT_BY_ID_FAILURE;
  payload: string;
}

export type ContactsAction =
  | IFetchContactsRequest
  | IFetchContactsSuccess
  | IFetchContactsFailure
  | IFetchContactByIdRequest
  | IFetchContactByIdSuccess
  | IFetchContactByIdFailure;
