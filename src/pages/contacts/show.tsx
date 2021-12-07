import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/shared/loader";
import ContactItem from "../../components/contacts/item";
import Error from "../../components/shared/error";
import { useTypedSelector, useActions } from "../../store/hooks";
import ActionTypes from "../../store/contacts/types";

interface Params {
  id: string;
}

const ShowContact = () => {
  const { id } = useParams<Params>();
  const contact = useTypedSelector((state) => state.contacts.item);
  const isLoading = useTypedSelector(
    (state) => state.apiLoading[ActionTypes.FETCH_CONTACT_BY_ID]
  );
  const error = useTypedSelector(
    (state) => state.apiError[ActionTypes.FETCH_CONTACT_BY_ID]
  );
  const { fetchContactById } = useActions();
  useEffect(() => {
    fetchContactById(id);
  }, []);

  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (error?.length) return <Error message={error} />;
    return <ContactItem contact={contact} />;
  };

  return render();
};

export default ShowContact;
