import React, { Component } from "react";
import { Label } from "./Filter.styled";

class Filter extends Component {
  render() {
    return (
      <Label>
        Find contacts by name
        <input
          type="filter"
          value={this.props.filter}
          onChange={this.props.onChange}
        ></input>
      </Label>
    );
  }
}

export default Filter;
