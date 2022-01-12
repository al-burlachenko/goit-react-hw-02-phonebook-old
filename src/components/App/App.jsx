import React, { Component } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addContact = (value) => {
    this.setState((prevState) => {
      prevState.contacts.push(value);
    });
    // return this.findContact(this.state.contacts);
  };

  getContacts = () => {
    console.log(this.state.contacts);
    return this.state.contacts;
  };

  render() {
    const contacts = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
