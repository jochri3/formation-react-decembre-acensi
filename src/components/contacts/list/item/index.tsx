import { Link } from "react-router-dom";
import Button from "../../../shared/button";
import { ContactItemProps } from "../../item";

interface ContactListItemProps extends ContactItemProps {
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactListItemProps> = ({
  contact,
  deleteContact,
}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fname}</td>
      <td>{contact.lname}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Button onClick={() => deleteContact(contact.id)}>Supprimer</Button>
        {/* <button onClick={() => deleteContact(contact.id)}>Supprimer</button> */}
        <Link to={`/contacts/${contact.id}`}>Voir</Link>
      </td>
    </tr>
  );
};

export default ContactItem;
