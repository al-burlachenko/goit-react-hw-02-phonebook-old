import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="filter"
          value={this.props.filter}
          onChange={this.props.onChange}
        ></input>
      </label>
    );
  }
}

export default Filter;
