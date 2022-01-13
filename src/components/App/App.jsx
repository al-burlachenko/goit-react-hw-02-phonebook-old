import React, { Component } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  AddContact = (currState) => {
    const { name, number } = currState;
    const { contacts } = this.state;

    const currentContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const recurringName = contacts.find(
      (contact) => contact.name === currentContact.name
    );

    if (recurringName) {
      return alert(currentContact.name + " is already in contacts");
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, currentContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.AddContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
