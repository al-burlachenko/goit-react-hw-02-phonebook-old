import React, { Component } from "react";
import PropTypes from "prop-types";

import { Label } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <Label>
        Find contacts by name
        <input type="filter" value={filter} onChange={onChange}></input>
      </Label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
