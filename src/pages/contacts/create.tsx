import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { IContact } from "../../@types/i-contact";
import ContactForm from "../../components/contacts/form";
import { useActions, useTypedSelector } from "../../store/hooks";

const initialState: IContact = {
  id: "",
  fname: "",
  lname: "",
  email: "",
  phoneNumber: "",
  address: "",
};
const CreateContact = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const updated = useTypedSelector((state) => state.contacts.updated);

  const history = useHistory();

  const { addContact } = useActions();
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addContact(contact);
  };

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  useEffect(() => {
    setContact(initialState);
    if (updated) {
      history.push("/contacts");
    }
  }, [updated]);
  return (
    <ContactForm
      contact={contact}
      buttonLabel="Créer"
      isUpdate={false}
      submitForm={submitForm}
      handleChange={handleChange}
    />
  );
};

export default CreateContact;
