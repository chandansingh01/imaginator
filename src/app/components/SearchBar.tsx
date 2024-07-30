import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center p-4 bg-gray-800 rounded-lg mb-4">
      <input
        type="text"
        placeholder="Describe to generate..."
        className="flex-grow p-2 bg-gray-700 rounded-l-lg outline-none"
      />
      <button className="p-2 bg-gray-700 rounded-r-lg">Generate</button>
    </div>
  );
};

export default SearchBar;