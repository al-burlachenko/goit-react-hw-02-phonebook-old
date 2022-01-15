import React, { Component } from "react";
import { Button, ContactListElement } from "./ContactList.styled";

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;

    return (
      <ul>
        {contacts.map((contact) => {
          const { name, number, id } = contact;
          return (
            <ContactListElement key={id}>
              {name + ": " + number}
              <Button
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Удалить
              </Button>
            </ContactListElement>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
