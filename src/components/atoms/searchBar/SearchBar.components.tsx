import React from "react";

export interface SearchBarInterface {
  location: string;
  onSubmit: () => void;
  onChange: () => void;
}

export const SearchBar: React.FC<SearchBarInterface> = ({
  location,
  onSubmit,
  onChange
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={location}
        className="bg-gray-600 rounded-md text-sm py-1 px-2 mr-2 w-36"
        onChange={onChange}
      />
      <button
        type="submit"
        className="bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-800 px-2 py-1 rounded-md text-sm transition duration-200"
      >
        Buscar
      </button>
    </form>
  );
};
