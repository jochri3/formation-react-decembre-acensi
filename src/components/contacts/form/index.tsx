import Button from "../../shared/button";
import Input from "../../shared/input";

const ContactForm = () => {
  return (
    <form>
      <Input
        label="First name"
        name="fname"
        type="text"
        placeholder="First name"
        value=""
      />
      <Input
        label="Last name"
        name="lname"
        type="text"
        placeholder="Last name"
        value=""
      />
      <Input
        label="Address email"
        name="email"
        type="email"
        placeholder="Ex : vous@gmail.com"
        value=""
      />
      <Input
        label="Phone number"
        name="phoneNumber"
        type="text"
        placeholder="Ex : +33 6 12 34 56 78"
        value=""
      />
      <Input
        label="Address"
        name="address"
        type="text"
        placeholder="Ex : 12 rue de la paix"
        value=""
      />
      <Button type="submit">Envoyer</Button>
    </form>
  );
};
