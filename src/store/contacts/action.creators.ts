import { Dispatch } from "redux";
import {
  fetchAll,
  fetchOne,
  deleteOne,
  createOne,
  updateOne,
} from "../../services/contacts.api";
import { ContactsAction } from "./actions";
import ActionTypes from "./types";
import { AxiosError } from "axios";
import { IContact } from "../../@types/i-contact";

export const fetchContacts =
  () => async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ActionTypes.FETCH_CONTACTS_REQUEST });
    fetchAll()
      .then((response) =>
        dispatch({
          type: ActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionTypes.FETCH_CONTACTS_FAILURE,
          payload: error?.response?.statusText as string,
        });
      });
  };

export const fetchContactById =
  (id: string) => async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ActionTypes.FETCH_CONTACT_BY_ID_REQUEST });
    fetchOne(id)
      .then((response) =>
        dispatch({
          type: ActionTypes.FETCH_CONTACT_BY_ID_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionTypes.FETCH_CONTACT_BY_ID_FAILURE,
          payload: error?.response?.statusText as string,
        });
      });
  };

export const deleteContact =
  (id: string) => async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ActionTypes.DELETE_CONTACT_REQUEST });
    deleteOne(id)
      .then(() =>
        dispatch({ type: ActionTypes.DELETE_CONTACT_SUCCESS, payload: { id } })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionTypes.DELETE_CONTACT_FAILURE,
          payload: error?.response?.statusText as string,
        });
      });
  };

export const addContact =
  (contact: IContact) => async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ActionTypes.ADD_CONTACT_REQUEST });
    createOne(contact)
      .then(() =>
        dispatch({
          type: ActionTypes.ADD_CONTACT_SUCCESS,
          payload: contact,
        })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionTypes.ADD_CONTACT_FAILURE,
          payload: error?.response?.statusText as string,
        });
      });
  };

export const updateContact =
  (data: IContact) => async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ActionTypes.UPDATE_CONTACT_REQUEST });
    updateOne(data)
      .then(() =>
        dispatch({
          type: ActionTypes.UPDATE_CONTACT_SUCCESS,
        })
      )
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionTypes.UPDATE_CONTACT_FAILURE,
          payload: error?.response?.statusText as string,
        });
      });
  };
