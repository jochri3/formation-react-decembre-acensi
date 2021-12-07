import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
      <Link to="/contacts">&lt;-Back</Link>
    </>
  );
};

export default ContactItem;
