import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IContact } from "../../@types/i-contact";
import { fetchOne } from "../../services/contacts.api";
import { AxiosError } from "axios";
import Loader from "../../components/shared/loader";
import ContactItem from "../../components/contacts/item";
import Error from "../../components/shared/error";

interface Params {
  id: string;
}

const ShowContact = () => {
  const { id } = useParams<Params>();
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchOne(id)
      .then((response) => {
        setContact(response.data);
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
    return <ContactItem contact={contact} />;
  };

  return render();
};

export default ShowContact;
