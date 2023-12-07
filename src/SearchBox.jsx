import React, { useState } from "react";

const SearchBox = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const renderResults = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredData.map((item) => (
      <div key={item.id}>
        <p>
          {getHighlightedText(item.name, searchTerm)} - {item.description}
        </p>
      </div>
    ));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {renderResults()}
    </div>
  );
};

export default SearchBox;
