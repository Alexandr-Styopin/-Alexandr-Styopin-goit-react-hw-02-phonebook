import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import InputName from './form-inputs/input-name/InpitName';
import InputNumber from './form-inputs/input-number/InputNumer';
import ContactsFilter from './ContactsFilter/ContactsFilter';

import Contacts from './contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSumitForm = e => {
    e.preventDefault();

    const valueInputName = e.target.elements.name.value;
    const valueInputNumber = e.target.elements.number.value;

    if (valueInputName === this.state.name) {
      alert(`${valueInputName} is already in contact`);
      return;
    }

    this.setState(prevState => ({
      name: valueInputName,
      number: valueInputNumber,
      contacts: [
        ...prevState.contacts,
        { name: valueInputName, number: valueInputNumber, id: nanoid() },
      ],
    }));
  };

  handleInputFilter = e => {
    const inputValue = e.target.value;

    this.setState({
      filter: inputValue,
    });
    console.log(this.state.filter);
  };

  filtredCountries = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  handleRemoveConact = id => {
    this.setState(prevStat => ({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleSumitForm}>
          <InputName />
          <InputNumber />
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <div>
          <ContactsFilter onInputFilter={this.handleInputFilter} />
          <ul>
            <Contacts
              onRamoveContact={this.handleRemoveConact}
              filtredCountries={this.filtredCountries()}
            />
          </ul>
        </div>
      </div>
    );
  }
}
