import React, { Component } from "react";
import "./App.css";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
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
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state.name);
    // console.log(this.state.name);
    this.addContact(this.state);
    this.reset();
  };

  addContact = (currState) => {
    const { name, number } = currState;

    const currentContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, currentContact],
    }));
    // console.log(currentContact);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    // console.log("render", this.state.contacts);
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => {
            const { name, number, id } = contact;
            return <li key={id}>{name + ": " + number}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
