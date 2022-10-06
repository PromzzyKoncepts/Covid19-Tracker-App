import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import './slide.css';

const Search = ({ data, setCountries }) => {
  const handleSearch = (e) => {
    const searchResults = data.filter((item) => item.countryRegion.toLowerCase().includes(e.target.value.toLowerCase()));
    setCountries(searchResults);
  };
  return (
    <div className="search">
      <InputGroup size="lg" onChange={handleSearch} className="center">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Country name"
        />
      </InputGroup>
    </div>
  );
};
export default Search;
