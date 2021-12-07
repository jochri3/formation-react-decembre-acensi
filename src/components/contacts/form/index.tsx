import React from "react";
import { IContact } from "../../../@types/i-contact";
import Button from "../../shared/button";
import Input from "../../shared/input";

interface ContactFormProps {
  isUpdate: boolean;
  contact: IContact;
  buttonLabel: string;
  handleChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isUpdate,
  buttonLabel,
  contact,
  handleChange,
  submitForm,
}) => {
  return (
    <form onChange={handleChange} onSubmit={submitForm}>
      <Input
        label="First name"
        name="fname"
        type="text"
        placeholder="First name"
        value={contact.fname}
      />
      <Input
        label="Last name"
        name="lname"
        type="text"
        placeholder="Last name"
        value={contact.lname}
      />
      <Input
        label="Address email"
        name="email"
        type="email"
        placeholder="Ex : vous@gmail.com"
        value={contact.email}
      />
      <Input
        label="Phone number"
        name="phoneNumber"
        type="text"
        placeholder="Ex : +33 6 12 34 56 78"
        value={contact.phoneNumber}
      />
      <Input
        label="Address"
        name="address"
        type="text"
        placeholder="Ex : 12 rue de la paix"
        value={contact.address}
      />
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
};

export default ContactForm;
