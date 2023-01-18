import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  gettingCreatedContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.gettingCreatedContact} />

        <h2>Contacts</h2>
        <div>
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={nanoid()}>
                {name} : {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
