import { IContact } from "../../../@types/i-contact";
import ContactItem from "./item";
import Wrapper from "./wrapper";

interface ContactListProps {
  contacts: Array<IContact>;
}

const ContactsList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <Wrapper>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Wrapper>
  );
};

export default ContactsList;
