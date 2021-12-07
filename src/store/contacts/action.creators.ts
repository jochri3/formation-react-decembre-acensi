import { Dispatch } from "redux";
import { fetchAll } from "../../services/contacts.api";
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
