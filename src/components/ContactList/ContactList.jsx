import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          //   console.log("тип работаю");
          return <li>{contact}</li>;
        })}
      </ul>
    );
  }
}

export default ContactList;
