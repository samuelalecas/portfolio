import React from "react";

export interface SearchBarInterface {
  location: string;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        className="w-full p-4 md:py-1 md:px-2 mr-2 mb-2 md:w-36 bg-gray-600 rounded-md text-sm"
        onChange={onChange}
      />
      <button
        type="submit"
        className="w-full md:w-14 p-3 md:px-2 md:py-1 bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-800 rounded-md text-sm transition duration-200"
      >
        Buscar
      </button>
    </form>
  );
};
