import { Link } from "react-router-dom";
import { ContactItemProps } from "../../item";

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fname}</td>
      <td>{contact.lname}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Link to={`/contacts/${contact.id}`}>Voir</Link>
      </td>
    </tr>
  );
};

export default ContactItem;
