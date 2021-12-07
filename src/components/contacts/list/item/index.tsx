import { IContact } from "../../../../@types/i-contact";

interface ContactItemProps {
  contact: IContact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fname}</td>
      <td>{contact.lname}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
    </tr>
  );
};

export default ContactItem;
