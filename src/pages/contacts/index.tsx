import { useEffect } from "react";
import ContactsList from "../../components/contacts/list";
import Loader from "../../components/shared/loader";
import Error from "../../components/shared/error";
import { useActions, useTypedSelector } from "../../store/hooks";
import ActionTypes from "../../store/contacts/types";

const ContactIndex = () => {
  const isLoading = useTypedSelector(
    (state) => state.apiLoading[ActionTypes.FETCH_CONTACTS]
  );
  const error = useTypedSelector(
    (state) => state.apiError[ActionTypes.FETCH_CONTACTS]
  );
  const contacts = useTypedSelector((state) => state.contacts.list);

  const { fetchContacts } = useActions();

  useEffect(() => {
    fetchContacts();
  }, []);

  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (error?.length) return <Error message={error} />;
    return <ContactsList contacts={contacts} />;
  };

  return render();
};

export default ContactIndex;
