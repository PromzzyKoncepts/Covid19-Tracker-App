import React from "react";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import "./slide.css";

const Search = () => {
  return (
    <div className="search">
      <InputGroup size="lg" className="center">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter name of country"
        />
      </InputGroup>
    </div>
  )
};
export default Search;