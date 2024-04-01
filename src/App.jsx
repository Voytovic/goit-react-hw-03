import { useEffect, useState } from 'react';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
import ContactForm from './components/contactForm/ContactForm.jsx';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const initialInfo = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contact');
    return savedContacts ? JSON.parse(savedContacts) : initialInfo;
  });

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts), [contacts]);
  }, [contacts]);

  const addContact = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.tel,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
