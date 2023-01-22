import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import initialContacts from '../initialContacts.json';
import { Section, SubTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  gettingCreatedContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.gettingCreatedContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
