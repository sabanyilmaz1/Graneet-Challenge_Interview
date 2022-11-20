import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchTerm, setSearchTerm, handleChange }) => {
  return (
    <div className="search">
      <div className="search--labelSearch">Je recherche ...</div>
      <form>
        <input
          className="search--input"
          value={searchTerm}
          onChange={handleChange}
          placeholder="... une ville,un code postal"
        />
      </form>
    </div>
  );
};
