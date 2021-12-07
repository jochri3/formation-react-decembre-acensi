import { IContact } from "../../../@types/i-contact";
import ContactItem from "./item";
import Wrapper from "./wrapper";

interface ContactListProps {
  contacts: Array<IContact>;
  deleteContact: (id: string) => void;
}

const ContactsList: React.FC<ContactListProps> = ({
  contacts,
  deleteContact,
}) => {
  return (
    <Wrapper>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </Wrapper>
  );
};

export default ContactsList;
