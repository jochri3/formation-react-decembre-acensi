import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IContact } from "../../@types/i-contact";
import ContactForm from "../../components/contacts/form";
import { useActions, useTypedSelector } from "../../store/hooks";

type Params = { id: string };

const EditContact = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const { updated, item } = useTypedSelector((state) => state.contacts);

  const history = useHistory();
  const { id } = useParams<Params>();

  const { updateContact, fetchContactById } = useActions();
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateContact(contact);
  };

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  useEffect(() => {
    setContact(item);
    if (updated) {
      history.push("/contacts");
    }
  }, [updated]);

  useEffect(() => {
    fetchContactById(id);
  }, []);
  return (
    <ContactForm
      contact={contact}
      buttonLabel="Mettre à jour"
      isUpdate={false}
      submitForm={submitForm}
      handleChange={handleChange}
    />
  );
};

export default EditContact;
