import { Dispatch } from "redux";
import { fetchAll, fetchOne, deleteOne } from "../../services/contacts.api";
import { ContactsAction } from "./actions";
import ActionTypes from "./types";
import { AxiosError } from "axios";

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
