enum ActionTypes {
  FETCH_CONTACTS = "fetch_contacts",
  FETCH_CONTACT_BY_ID = "fetch_contact_by_id",

  FETCH_CONTACTS_REQUEST = "fetch_contacts_request",
  FETCH_CONTACTS_SUCCESS = "fetch_contacts_success",
  FETCH_CONTACTS_FAILURE = "fetch_contacts_failure",

  FETCH_CONTACT_BY_ID_REQUEST = "fetch_contact_by_id_request",
  FETCH_CONTACT_BY_ID_SUCCESS = "fetch_contact_by_id_success",
  FETCH_CONTACT_BY_ID_FAILURE = "fetch_contact_by_id_failure",

  ADD_CONTACT_REQUEST = "add_contact_request",
  ADD_CONTACT_SUCCESS = "add_contact_success",
  ADD_CONTACT_FAILURE = "add_contact_failure",

  DELETE_CONTACT_REQUEST = "delete_contact_request",
  DELETE_CONTACT_SUCCESS = "delete_contact_success",
  DELETE_CONTACT_FAILURE = "delete_contact_failure",

  UPDATE_CONTACT_REQUEST = "update_contact_request",
  UPDATE_CONTACT_SUCCESS = "update_contact_success",
  UPDATE_CONTACT_FAILURE = "update_contact_failure",

  //   SET_CURRENT_CONTACT = "set_current_contact",
  //   CLEAR_CURRENT_CONTACT = "clear_current_contact",
}

export default ActionTypes;
