import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;

    return (
      <ul>
        {contacts.map((contact) => {
          const { name, number, id } = contact;
          return (
            <li key={id}>
              {name + ": " + number}
              <button
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
