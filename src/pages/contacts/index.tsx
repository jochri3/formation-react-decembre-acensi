import { useState, useEffect } from "react";
import { IContact } from "../../@types/i-contact";
import { fetchAll } from "../../services/contacts.api";
import ContactsList from "../../components/contacts/list";
import Loader from "../../components/shared/loader";
import Error from "../../components/shared/error";
import { AxiosError } from "axios";

const ContactIndex = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchAll()
      .then((response) => {
        setContacts(response.data);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        setError(err.response?.statusText as string);
        setIsLoading(false);
      });
  }, []);

  const render = () => {
    if (isLoading) {
      return <Loader />;
    } else if (error.length) return <Error message={error} />;
    return <ContactsList contacts={contacts} />;
  };

  return render();
};

export default ContactIndex;
