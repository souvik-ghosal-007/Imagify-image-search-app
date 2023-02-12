import React, { useState } from "react";

const SearchBar = ({ callApi }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    callApi(text);

    setText("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter your search here..."
          onChange={handleChange}
          value={text}
        />
      </form>
    </div>
  );
};

export default SearchBar;
