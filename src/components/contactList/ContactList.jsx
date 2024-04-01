import css from './ContactList.module.css';
import Contact from '../contact/Contact.jsx';

export default function ContactList({ filteredContacts, deleteContact }) {
  return (
    <div className={css['container-cont']}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}
