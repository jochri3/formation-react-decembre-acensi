import React from "react";
import { IContact } from "../../../@types/i-contact";

export interface ContactItemProps {
  contact: IContact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  return (
    <>
      <h1>
        {contact.fname} {contact.lname}
      </h1>

      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
      </p>
      <p>{contact.address}</p>
    </>
  );
};

export default ContactItem;
