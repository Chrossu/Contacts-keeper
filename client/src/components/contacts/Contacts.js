import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <React.Fragment>
      {contacts.map(contact => (
        <ContactItem id={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  )
}

export default Contacts;